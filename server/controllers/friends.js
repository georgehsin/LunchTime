const mongoose = require('mongoose');
const User = mongoose.model('User');

function friendsController(){
  this.add = function(req,res){
    Promise.all([
      User.findById(req.body.recieve_id), 
      User.findById(req.body.send_id)
    ]).then((users)=>{
      const reciever = users[0]
      const sender = users[1]
      reciever.rec_pending.remove(req.body.send_id)
      reciever.friends.push(sender)
      sender.sent_pending.remove(req.body.recieve_id)
      sender.friends.push(reciever)
      reciever.save()
      sender.save()
      res.json(reciever);
    }).catch((error)=>{
      console.log(error)
    });
  }
  this.friendRequest = function(req,res){
    Promise.all([
      User.findById(req.body.recieve_id),
      User.findById(req.body.send_id)
    ]).then((users)=>{
      const reciever = users[0]
      const sender = users[1]
      reciever.rec_pending.push(sender)
      sender.sent_pending.push(reciever)
      reciever.save();
      sender.save();
      res.json(reciever);
    }).catch((error)=>{
      console.log(error)
    });
  };
  this.showFriends = function(req,res){
    User.findById(req.params.id)
      .populate('friends')
      .exec(function(err, results){
        res.json(results.friends)
      });
  }
  this.searchFriend = function(req,res){
    User.findById(req.body.userID)
      .populate('friends')
      .exec(function(err, results){
        res.json(results.friends)
      });
  }
}

module.exports = new friendsController();