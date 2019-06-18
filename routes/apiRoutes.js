var db = require("../models");
var friends = require("../data/friends")

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });
  
  app.get("/api/friends", function(req,res){
    res.json(friends);
  });

  app.post("/api/friends", function(req,res){
    var user = req.body;
    for(var i = 0; i < user.scores.length; i++){
      user.scores[i] = parseInt(user.scores[i]);
    }

    var bestFriendStartRange = 0;
    var minimumDifference = 40;

    for(var i = 0; i < friends.length; i++){
      var totalDifference = 0;

      for(var j = 0; j < friends[i].scores.length; j++){
        var difference = Math.abs(user.scores[j] - friends[i.scores[j]]);
        totalDifference += difference; 
      }

      if(totalDifference < minimumDifference){
        bestFriendStartRange = i;
        minimumDifference = totalDifference;
      }
    }

    friends.push(user);
    res.json(friends[bestFriendStartRange]);
    




  })







};
