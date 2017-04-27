var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.create = function(req,res){
    User.create(req.body, function(err, result){
      if(err){
        console.log(err);
      }else{
        res.json(result);
      }
    });
  };
  this.login = function(req,res){
    User.findOne({email: req.body.email}, function(err, result){
      if(err){
        console.log(err);
      }
      else if (!result){
        res.send({'invalid':true});
      }
      else {
        if (result.password == req.body.password){
          console.log(result)
          res.json(result);
        }
        else{
          res.send({'invalid':true});
        } 
      }
    });
  };  
}

module.exports = new UsersController();