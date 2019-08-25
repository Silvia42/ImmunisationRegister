/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')
// ObjectId is not JavaScript type, it exists only in mongoose
const ObjectId = mongoose.ObjectId

// because deprecation warning: https://mongoosejs.com/docs/deprecations.html#-findandmodify-
// mongoose.set('useFindAndModify', true)

/* Step 1 alternative
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 */
// global.sampleModel = [];
////////////////////////////////////////////

/* Step 2
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 */

const PersonSchema = new mongoose.Schema({
  // _id is AUTO ASSIGN when a new document is added
  name: String,
  dob: Date,
  admin: Boolean // true = YES Admin, false = NO Admin
})

const DiseaseSchema = new mongoose.Schema({
  // _id is AUTO ASSIGN when a new document is added
  name: String,
  description: String
})

const VaccineTypeSchema = new mongoose.Schema({
  // _id is AUTO ASSIGN when a new document is added
  name: String,
  description: String
})

const VaccinationRecordSchema = new mongoose.Schema({
  // _id is AUTO ASSIGN when a new document is added
  personId: ObjectId, 
  diseaseId: ObjectId, 
  vaccineType: ObjectId,
  date: Date,
  note: String
})

/* Step 3
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 */

//////////////////////////////////////////////////////////////////////
///////////////////////// PersonCollection  /////////////////////////
//////////////////////////////////////////////////////////////////////
const PersonCollection = mongoose.model('PersonRecord', PersonSchema)
const createPersonRecord = () => {
  return PersonCollection.create({
    name: "",
    dob: new Date(),
    admin: false
  })
}
const getPersonRecords = () => PersonCollection.find()
const getPersonRecord = (id) => PersonCollection.findById(id)
const addPersonRecord = (newPerson) => PersonCollection.insertMany([newPerson])
const updatePersonRecord = (id,person) => PersonCollection.updateOne({_id:id},{name:person})
const deletePersonRecord = (id) => PersonCollection.deleteOne({_id:id})

//////////////////////////////////////////////////////////////////////
///////////////////////// DiseaseCollection  /////////////////////////
//////////////////////////////////////////////////////////////////////
const DiseaseCollection = mongoose.model('DiseaseRecord', DiseaseSchema)
const createDiseaseRecord = () => {
  return DiseaseCollection.create({
    name: "",
    description: ""
  })
}
const getDiseaseRecords = () => DiseaseCollection.find()
const getDiseaseRecord = (id) => DiseaseCollection.findById(id)
const addDiseaseRecord = (newDisease) => DiseaseCollection.insertMany([newDisease])
const updateDiseaseRecord = (id,disease) => DiseaseCollection.updateOne({_id:id},{name:disease})
const deleteDiseaseRecord = (id) => DiseaseCollection.deleteOne({_id:id})

//////////////////////////////////////////////////////////////////////
///////////////////////// VaccineTypeCollection  /////////////////////////
//////////////////////////////////////////////////////////////////////
const VaccineTypeCollection = mongoose.model('VaccineTypeRecord', VaccineTypeSchema)
const createVaccineTypeRecord = () => {
  return VaccineTypeCollection.create({
    name: "",
    description: ""
  })
}
const getVaccineTypeRecords = () => VaccineTypeCollection.find()
const getVaccineTypeRecord = (id) => VaccineTypeCollection.findById(id)
const addVaccineTypeRecord = (newType) => VaccineTypeCollection.insertMany([newType])
const updateVaccineTypeRecord = (id,type) => 
      VaccineTypeCollection.updateOne({_id:id},{name:type})
      // VaccineTypeCollection.findByIdAndUpdate({_id:id},{name:type})
      // VaccineTypeCollection.findByIdAndUpdate({_id:id},{name:type},{new: true})
const deleteVaccineTypeRecord = (id) => VaccineTypeCollection.deleteOne({_id:id})
// const deleteVaccineTypeRecord = (id) => VaccineTypeCollection.findByIdAndDelete(id)
// const dropVaccineTypeCollection = () => mongoose.db.dropCollection(VaccineTypeCollection)
const deleteAllVaccineTypeRecord = () => VaccineTypeCollection.deleteMany()



//////////////////////////////////////////////////////////////////////
//////////////////// VaccinationRecordCollection  ////////////////////
//////////////////////////////////////////////////////////////////////
const VaccinationRecordCollection = mongoose.model('VaccinationRecord', VaccinationRecordSchema)
// name of local database is imre, it was set in connection.js
// VaccinationRecord is name of "collection" (table)
// a document ("line in table")
// VaccinationRecordCollection is name of variable, value is 
const createVaccinationRecord = (personId,diseaseId,vaccineType) => {
  return VaccinationRecordCollection.create({
    personId,diseaseId,vaccineType,
    date: new Date(),
    note: ""
  })
}

const getVaccinationRecordsForPersonById = (personId) => {
  return VaccinationRecordCollection.find({personId})
}

/////////

//// Step 4  * TODO: delete this it's just a sample
function getHelloWorldString() {return 'hello world'}

/* Step 5
 * TODO: export all functions from this file by adding their names as keys to this object
 */
module.exports = {
  getHelloWorldString,

  /////////////////////////  PersonRecord  //////////////////////////
  createPersonRecord,
  getPersonRecords,
  getPersonRecord,
  addPersonRecord,
  updatePersonRecord,
  deletePersonRecord,

  /////////////////////////  DiseaseRecord   ////////////////////////
  createDiseaseRecord,
  getDiseaseRecords,
  getDiseaseRecord,
  addDiseaseRecord, 
  updateDiseaseRecord,
  deleteDiseaseRecord,

  /////////////////////////  VaccineTypeRecord  /////////////////////
  createVaccineTypeRecord,
  getVaccineTypeRecords,
  getVaccineTypeRecord,
  addVaccineTypeRecord,
  updateVaccineTypeRecord,
  deleteVaccineTypeRecord,
  deleteAllVaccineTypeRecord,
  //dropVaccineTypeCollection,

  /////////////////////////  VaccinationRecord  /////////////////////
  createVaccinationRecord,

  getVaccinationRecordsForPersonById,
}

///https://scotch.io/@ossaijad/how-to-do-join-operations-and-create-links-between-mongodb-collection
//////////////////////////////////////////////////////////////////
/////////// How to work with a foreign key in mongoose ///// models
//////////////////////////////////////////////////////////////////
/*
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var IngredientSchema = new Schema({
    name: String
});

module.exports = mongoose.model('Ingredient', IngredientSchema);


var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema({
    name: String,
    ingredients:[
      {type: Schema.Types.ObjectId, ref: 'Ingredient'}
    ]
});

module.exports = mongoose.model('Recipe', RecipeSchema);

*/

//////////////////////   To Save:  //////////////////////////////////
/*
var r = new Recipe();

r.name = 'Blah';
r.ingredients.push('mongo id of ingredient');

r.save();
*/

////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
      // To fix all deprecation warnings, follow the below steps:

      // mongoose.set('useNewUrlParser', true);
      // mongoose.set('useFindAndModify', false);
      // mongoose.set('useCreateIndex', true);
      // Replace update() with updateOne(), updateMany(), or replaceOne()
      // Replace remove() with deleteOne() or deleteMany().
      // Replace count() with countDocuments(), unless you want to count how many documents 
      // are in the whole collection (no filter). 
      // In the latter case, use estimatedDocumentCount().