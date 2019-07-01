// ===============================================================================
// DEPENDENCIES
// ===============================================================================
  var path = require("path");
  var express = require("express");
  

// ===============================================================================



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  

    // Load index page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/index.html"));
            
    });

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/survey.html"));
            
    });
    app.get("/styles", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/styles/styles.css"));
            
    });


    app.get("/friends1", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/images/friends.jpg"));
            
    });

    app.get("/friends2", function(req, res) {
      res.sendFile(path.join(__dirname, "/../public/images/friends2.jpg"));
            
    });
    
   
  };

// ===============================================================================
