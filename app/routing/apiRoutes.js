var friendPoolArray = require('../data/friends.js');

module.exports = function (app){
  app.get('/api/friends', function(req, res){
    res.json(friendPoolArray);
  });

  app.post('/api/friends', function(req, res){
    var bestScore = 100;
    var bestMatch = [];
    var userScores= [];
    var difference =0;

    var check = function(input, name, photo){
      for (var i = 0; i < input.length; i++) {
        difference = difference + Math.abs(input[i]-userScores[i]);
      }
      if (difference < bestScore) {
        bestScore = difference;
        bestMatch = [];
        bestMatch.push(name, photo);
      }
      difference=0;
      console.log(bestMatch);
    };

    for (var i = 0; i < req.body.scores.length; i++) {
      userScores.push(parseInt(req.body.scores[i]));
    }

    for (var x = 0; x < friendPoolArray.length; x++) {
      check(friendPoolArray[x].scores, friendPoolArray[x].name, friendPoolArray[x].photo);
    }

    friendPoolArray.push(req.body);
    res.json(bestMatch);
  });
};
