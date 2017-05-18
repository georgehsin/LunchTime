const login = require('../controllers/login.js');
const user = require('../controllers/user.js');
const friend = require('../controllers/friends.js');
const events = require('../controllers/events.js');

module.exports = function(app){
  app.post('/register', login.create);
  app.post('/login', login.login);

  app.post('/userSearch', user.searchUser);
  app.get('/user/:id', user.profile);
  
  app.put('/user', friend.add);
  app.post('/sendFriendRequest', friend.friendRequest);
  app.get('/showFriends/:id', friend.showFriends);
  app.post('/friendSearch', friend.searchFriend);

  app.post('/search', events.search)
}