const imreApi = require('./imre.js');


imreApi.createPersonRecord().then(person =>
imreApi.createVaccineTypeRecord().then(type =>
imreApi.createDiseaseRecord().then(disease =>
imreApi.createVaccinationRecord(person._id, disease._id, type._id)
  .then(console.log)
  .finally(() => { process.exit()})
)))
