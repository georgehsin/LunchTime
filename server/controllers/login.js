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
      console.log('hello')
      res.send({'invalid':true})
    });
  }
}

module.exports = new loginController();