
var friends = require("../data/friends")

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    var userData = req.body;

    var scores = [
      parseInt(userData.question1),
      parseInt(userData.question2),
      parseInt(userData.question3),
      parseInt(userData.question4),
      parseInt(userData.question5),
      parseInt(userData.question6),
      parseInt(userData.question7),
      parseInt(userData.question8),
      parseInt(userData.question9),
      parseInt(userData.question10)
    ]

    var bestFriendIndex = 0;
    var minimumDifference = 40;

    for (var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for (var j = 0; j < friends[i].scores.length; j++) {
        
        var difference = Math.abs(scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      if (totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;

      }


    }
    friends.push(userData);
    res.json(friends[bestFriendIndex]);

  })
};
