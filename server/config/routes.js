console.log('routes');

var mongoose = require('mongoose');
var user = require('../controllers/user.js');

module.exports = function(app){
  app.post('/user', user.create);
  app.post('/userLogin', user.login);
}