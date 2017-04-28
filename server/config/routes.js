var user = require('../controllers/user.js');

module.exports = function(app){
  app.post('/user', user.create);
  app.post('/userLogin', user.login);
  app.post('/userSearch', user.searchUser);
  app.post('/sendFriendRequest', user.friendRequest);
  app.get('/user/:id', user.profile);
  app.put('/user', user.add);
}