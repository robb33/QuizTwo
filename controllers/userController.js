var bcrypt = require('bcryptjs');
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')


// var connection = mysql.createConnection({ 
//   host: "localhost",
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "",
//   database: "groupon_db"
// });





// Import the model (cat.js) to use its database functions.
//not sure if we need a model for quiz since we arent pulling data but we are pushing
// var cat = require("../models/cat.js");

//default url route
router.get("/new", function(req, res) {
  //requests the cat.all function
  	// res.render('users/new.handlebars');
    // res.render('users/front-page');

    // res.render('users/new');
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
});


router.get('/sign-in', function(req,res) {
  res.render('users/sign-in')  
   res.send('yoy') 
  // res.render('users/sign_in');
});


router.get('/sign-out', function(req,res) {
  //end session
  req.session.destroy(function(err) {
     res.redirect('/new')
  })
});


router.post('/login', function(req, res) {
  //select the email in email login, if it there
  var query = "SELECT * FROM users WHERE email = ?";
                          //this is the ?
                          //comes from sign_in handlebars
  connection.query(query, [ req.body.email ], function(err, response) {
     //if the array has 1, there is a user with that email in the db
      if (response.length == 0){
        res.redirect('/users/sign-in')
      }
            //comparing password, to password stored with user, 
        bcrypt.compare(req.body.password, response[0].password_hash, function(err, result) {
            //if the pass word is true
            if (result == true){
//            this takes all the users info from table, to keep it logged in
              req.session.logged_in = true;
              req.session.user_id = response[0].id;
              req.session.user_email = response[0].email;
              req.session.username = response[0].username;

           //*Needs to re-direct to page where quiz
              res.redirect('/quizpage');
            }else{
            //if email dosent exist send back to this route
              res.redirect('/users/sign-in')
            }
        });
  });
});


router.post('/create', function(req,res) {
  var query = "SELECT * FROM users WHERE email = ?"

  connection.query(query, [ req.body.email ], function(err, response) {
   
    if (response.length > 0) {
      res.send('we already have an email or username for this account')
    
    } else {

      bcrypt.genSalt(10, function(err, salt) {
          //res.send(salt)
          bcrypt.hash(req.body.password, salt, function(err, hash) {            
           
            var query = "INSERT INTO users (username, email, password_hash, company) VALUES (?, ?, ?, ?)"

            connection.query(query, [ req.body.username, req.body.email, hash], function(err, response) {

              req.session.logged_in = true;

              req.session.user_id = response.insertId; //only way to get id of an insert for the mysql npm package

              var query = "SELECT * FROM users WHERE id = ?"
             
              connection.query(query, [ req.session.user_id ], function(err, response) {
               
                req.session.username = response[0].username;
                req.session.user_email = response[0].email;
        

                //
                res.redirect('/quizpage')
              });
            });
          });
      });

    }
  });


});




module.exports =router;