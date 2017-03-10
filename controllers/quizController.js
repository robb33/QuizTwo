var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
//not sure if we need a model for quiz since we arent pulling data but we are pushing
// var cat = require("../models/cat.js");

//default url route
// router.get("/", function(req, res) {
//   //requests the cat.all function
//   	res.send('hey');
  //responds, with the data from result*
  // cat.all(function(data) {
  
  // //need to turn the data into an object for handlebars to work
  //   var hbsObject = {
  //     cats: data
  //   };
  //   console.log(hbsObject);
   
   // renders the hbsObject to the index.handlebars page    
     // res.render("index", hbsObject);
  // });
// });

// module.exports =router;