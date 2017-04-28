var mongoose = require('mongoose');
var User = mongoose.model('User');

function UsersController(){
  this.profile = function(req,res){
    console.log(req.params.id)
    User.findById({_id: req.params.id})
      .populate('friends')
      .populate('sent_pending')
      .populate('rec_pending')
      .exec(function(err, results) {
        res.json(results);
        });
      // res.json(results);
  }
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
          }
        });

      }
    });
  }
  this.searchUser = function(req,res){
    User.find(
      {$or:[{'name':{'$regex':req.body.name, '$options':'i'}}, {'email':{'$regex':req.body.name, '$options':'i'}}]}, function(err, results){
      res.json(results);
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
          }
        });

      }
    });
  }
  this.create = function(req,res){
    User.create(req.body, function(err, result){
      if(err){
        console.log(err);
      }else{
        res.json(result);
      }
    });
  }
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
  }
}

module.exports = new UsersController();