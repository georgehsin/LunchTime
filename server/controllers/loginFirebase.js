const mongoose = require('mongoose');
const User = mongoose.model('User');

function loginController(){
  this.create = function(req,res){
    User.create(req.body).then((result)=>{
      res.json(result)
    }).catch((err)=>{
      console.log(err)
    })
  }
  this.login = function(req,res){
    User.findOne({email: req.body.email}).then((result)=>{
      if (result.password == req.body.password){
        res.json(result);
      }
    }).catch(()=>{
      res.send({'invalid':true})
    });
  }
}

module.exports = new loginController();


var database = firebase.database();

function loginController(){
    this.create = function writeUserData(userId, name, email) {
        firebase.database().ref('users/' + userId).set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
      }
    this.login = function(req,res){
      User.findOne({email: req.body.email}).then((result)=>{
        if (result.password == req.body.password){
          res.json(result);
        }
      }).catch(()=>{
        res.send({'invalid':true})
      });
    }
  }