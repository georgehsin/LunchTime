var mongoose = require('mongoose');
var User = mongoose.model('User');

function friendsController(){
  this.add = function(req,res){
    User.findById({_id: req.body.recieve_id}, function(err, reciever){
      if(err){
        console.log(err);
      }
      else{
        User.findById({_id: req.body.send_id}, function(err, sender){
          if(err){
            console.log(err);
          }
          else{
            reciever.rec_pending.remove(req.body.send_id)
            reciever.friends.push(sender)
            sender.sent_pending.remove(req.body.recieve_id)
            sender.friends.push(reciever)
            reciever.save()
            sender.save()
            res.json(reciever);
          }
        });
      }
    });
  }
  this.friendRequest = function(req,res){
    User.findById({_id: req.body.recieve_id}, function(err, reciever){
      if(err){
        console.log(err);
      }
      else{
        User.findById({_id: req.body.send_id}, function(err, sender){
          if(err){
            console.log(err);
          }
          else{
            reciever.rec_pending.push(sender)
            sender.sent_pending.push(reciever)
            reciever.save()
            sender.save()
            res.json(reciever);
          }
        });

      }
    });
  }
  this.showFriends = function(req,res){
    User.findById({_id: req.params.id})
      .populate('friends')
      .exec(function(err, results){
        res.json(results.friends)
      });
  }
  this.searchFriend = function(req,res){
    User.findById({_id: req.body.userID})
      .populate('friends')
      .exec(function(err, results){
        res.json(results.friends)
      });
  }
}

module.exports = new friendsController();