var friendPoolArray = require('../data/friends.js');

module.exports = function (app){
  app.get('/api/friends', function(req, res){
    res.json(friendPoolArray);
  });

  app.post('/api/friends', function(req, res){
    friendPoolArray.push(req.body);
    res.json();
  });
};
