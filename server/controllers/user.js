const mongoose = require('mongoose');
const User = mongoose.model('User');

function UsersController(){
  this.profile = function(req,res){
    User.findById(req.params.id)
      .populate('friends')
      .populate('sent_pending')
      .populate('rec_pending')
      .exec(function(err, results) {
        res.json(results);
      });
  }
  this.searchUser = function(req,res){
    console.log('searching for users')
    User.find(
      {$or:[
        {'name':{'$regex':req.body.name, '$options':'i'}}, 
        {'email':{'$regex':req.body.name, '$options':'i'}}
      ]}
    ).then((results)=>{
      console.log(results)
      res.json(results);
    });
  };
}

module.exports = new UsersController();