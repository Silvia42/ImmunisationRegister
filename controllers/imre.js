//////////////////////////             Step 1 import express      ////////
const express = require('express')

//////////////////////////             Step 2:  Import the api files from the models ////////
//  * TODO: change the file path to the models file you'll need to use.
//  * TODO: rename this from `templateApi` to something more sensible (e.g: `shopsAPI`)
//  * NOTE: You may need to import more than one API to create the controller you need.

const imreApi = require('../models/imre.js')

//////////////////////////             Step 3 Create a new router.     ////////
//  * the router will "contain" all the request handlers that you define in this file.
//  * TODO: rename this from templateRouter to something that makes sense. (e.g:`shopRouter`)

const imreRouter = express.Router()

//////////////////////////             Step 4         ////////////////////////// 
// * TODO: Put all request handlers here

/////////////////////////////////////////////////////////////////////
///////////////////////// PersonCollection  /////////////////////////
/////////////////////////////////////////////////////////////////////

imreRouter.get('/Person', function(req,res) {
  //res.send(imreApi.getVaccineTypeRecords());
  imreApi.getPersonRecords().then((personInDB) => {
    // res.send(vTypeInDB);
    res.render('allPerson', {personInDB});
  })
})

imreRouter.get('/addPerson', (req, res) => {
  res.render('addPerson', {})
})

imreRouter.post('/Person', (req, res) => {
  imreApi.addPersonRecord(req.body).then(() => {
    res.redirect("/imre/Person")
    // res.send('Person Added')
    // res.send(200);
  })
})

//////////////////////////////////////////////////////////////////////
///////////////////////// DiseaseCollection  /////////////////////////
//////////////////////////////////////////////////////////////////////

imreRouter.get('/Disease', function(req,res) {
  //res.send(imreApi.getVaccineTypeRecords());
  imreApi.getDiseaseRecords().then((diseaseInDB) => {
    // res.send(vTypeInDB);
    res.render('allDisease', {diseaseInDB});
  })
})

imreRouter.get('/addDisease', (req, res) => {
  res.render('addDisease', {})
})

imreRouter.post('/Disease', (req, res) => {
  imreApi.addDiseaseRecord(req.body).then(() => {
    res.redirect("/imre/Disease")
    // res.render('allDisease', {diseaseInDB});
    // res.send('Disease Added')
    // res.send(200);
  })
})

imreRouter.get('/Disease/:diseaseId', (req, res) => {
  imreApi.getDiseaseRecord(req.params.diseaseId).then(diseaseRecord => {
      res.render('editDisease', {diseaseRecord, diseaseId: req.params.diseaseId})
  })
})

imreRouter.put('/Disease/:diseaseId', (req,res) => {
  imreApi.updateDiseaseRecord(req.params.diseaseId, req.body).then(() => {
      // res.send('Updated Disease')
      //res.render('editDisease', {diseaseRecord, diseaseId: req.params.diseaseId})
      //UnhandledPromiseRejectionWarning: Unhandled promise rejection.
      res.redirect("/imre/Disease")
  })
})

imreRouter.delete('/Disease/:diseaseId', (req, res) => {
  imreApi.deleteDiseaseRecord(req.params.diseaseId).then(() => {
      //res.send('DiseaseRecord Deleted')
      res.redirect("/imre/Disease")
  })
})
imreRouter.delete('/Disease', (req, res) => {
  imreApi.deleteEmptyDiseaseRecords().then(() => {
      //res.send('Empty DiseaseRecords Deleted')
      res.redirect("/imre/Disease")
  })
})

//////////////////////////////////////////////////////////////////////
///////////////////////// VaccineTypeCollection  /////////////////////
//////////////////////////////////////////////////////////////////////

imreRouter.get('/VaccineType', function(req,res) {
  //res.send(imreApi.getVaccineTypeRecords());
  imreApi.getVaccineTypeRecords().then((vTypeInDB) => {
    // res.send(vTypeInDB);
    res.render('allVaccineType', {vTypeInDB});
  })
})

imreRouter.get('/addVaccineType', (req, res) => {
  res.render('addVaccineType', {})
})

imreRouter.post('/VaccineType', (req, res) => {
  imreApi.addVaccineTypeRecord(req.body).then(() => {
    //console.log("I am here!")
    res.redirect("/imre/VaccineType")
    // res.send('VaccineType Added')
    // res.send(200);
  })
})

imreRouter.get('/VaccineType/:vaccineTypeId', (req, res) => {
  imreApi.getVaccineTypeRecord(req.params.vaccineTypeId).then(vaccineTypeRecord => {
      res.render('editVaccineType', {vaccineTypeRecord, vaccineTypeId: req.params.vaccineTypeId})
  })
})

imreRouter.put('/VaccineType/:vaccineTypeId', (req,res) => {
  imreApi.updateVaccineTypeRecord(req.params.vaccineTypeId, req.body).then(() => {
      res.redirect("/imre/VaccineType")
  })
})

imreRouter.delete('/VaccineType/:vaccineTypeId', (req, res) => {
  imreApi.deleteVaccineTypeRecord(req.params.vaccineTypeId).then(() => {
      //res.send('VaccineTypeRecord Deleted')
      res.redirect("/imre/VaccineType")
  })
})
imreRouter.delete('/VaccineType', (req, res) => {
  imreApi.deleteEmptyVaccineTypeRecords().then(() => {
      //res.send('Empty VaccineTypeRecords Deleted')
      res.redirect("/imre/VaccineType")
  })
})

//////////////////////////////////////////////////////////////////////
//////////////////// VaccinationRecordCollection  ////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////             Step 5         //////////////////////////
// * TODO: delete this handler; it's just a sample
imreRouter.get('/', (req, res) => {
  res.send(imreApi.getHelloWorldString())
})

//////////////////////////             Step 6         //////////////////////////
// * Export the router from the file.

module.exports = {
  imreRouter
}
