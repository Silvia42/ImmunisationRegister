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
    //console.log("I am here!")
    res.redirect("/imre/Disease")
    // res.send('Disease Added')
    // res.send(200);
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
