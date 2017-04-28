var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = new mongoose.Schema({
	name: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	friends: [{type: ObjectId, ref: "User"}],
	sent_pending: [{type: ObjectId, ref: "User"}],
	rec_pending: [{type: ObjectId, ref: "User"}],
})

var User = mongoose.model('User', userSchema)