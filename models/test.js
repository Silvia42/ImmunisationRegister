const imreApi = require('./imre.js');


// imreApi.createPersonRecord().then(person =>
// imreApi.createVaccineTypeRecord().then(type =>
// imreApi.createDiseaseRecord().then(disease =>
// imreApi.createVaccinationRecord(person._id, disease._id, type._id)
//   .then(console.log)
//   .finally(() => { process.exit()})
// )))

imreApi.getVaccinationRecordsForPersonById('5d6034b110fd53d7bef27832')
.then(xyz=>console.log('asdf',xyz))

// imreApi.createVaccineTypeRecord().then(vr=>console.log('vacrec',vr))
imreApi.createVaccineTypeRecord().then(console.log)