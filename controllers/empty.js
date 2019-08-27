//////////////////////////             Step 1 import express      ////////
const express = require('express')

//////////////////////////             Step 3 Create a new router.     ////////
const emptyRouter = express.Router()

//////////////////////////             Step 5         //////////////////////////
emptyRouter.get('/', (req, res) => {
    // res.send(imreApi.getHelloWorldString())
    res.render('home')
})

//////////////////////////             Step 6         //////////////////////////
// * Export the router from the file.
module.exports = {
    emptyRouter
  }