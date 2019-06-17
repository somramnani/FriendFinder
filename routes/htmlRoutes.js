// ===============================================================================
// DEPENDENCIES
// ===============================================================================
  var path = require("path");
  var db = require("../models");
// ===============================================================================



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
      res.sendFile(path.join(__dirname, "..public/index.html"));
            
    });

    app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
            
    });
    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
      res.render("404");
    });
  };

// ===============================================================================
