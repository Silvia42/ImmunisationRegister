const imreApi = require('./imre.js');


// imreApi.createPersonRecord().then(person =>
// imreApi.createVaccineTypeRecord().then(type =>
// imreApi.createDiseaseRecord().then(disease =>
// imreApi.createVaccinationRecord(person._id, disease._id, type._id)
//   .then(console.log)
//   .finally(() => { process.exit()})
// )))

// imreApi.getVaccinationRecordsForPersonById('5d6034b110fd53d7bef27832')
// .then(xyz=>console.log('asdf',xyz))

// imreApi.createVaccineTypeRecord().then(vr=>console.log('vacrec',vr))
// imreApi.createVaccineTypeRecord().then(console.log)

// imreApi.updateVaccineTypeRecord('5d62bb0645e2aaecb23f7af8','qwerty')
// .then(console.log)

///////////////////////               
// imreApi.deleteAllVaccineTypeRecord().then(console.log).finally(process.exit)
///////////////////////  

imreApi.createVaccineTypeRecord().then(type => 
imreApi.updateVaccineTypeRecord(type._id,'QQQQQQQ')
.then(console.log)
.then(imreApi.getVaccineTypeRecords().then(console.log).finally(process.exit))
)

//imreApi.getVaccineTypeRecords().then(console.log).finally(process.exit)

// imreApi.createDiseaseRecord().then(console.log)

// imreApi.createPersonRecord().then(console.log)