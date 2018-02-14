var mongoose = require('mongoose');


var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});


// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;





mongoose.connect('mongodb://Desting:UtNCMcq9UzPWdww2@cluster0-shard-00-00-pnbrr.mongodb.net:27017,cluster0-shard-00-01-pnbrr.mongodb.net:27017,cluster0-shard-00-02-pnbrr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
 
var db = mongoose.connection;
db.on('error', function (err) {
  console.log('connection error', err);
});
db.once('open', function () {
  console.log('connected.');
  saveDave();
});



function saveDave(){
    // if our user.js file is at app/models/user.js

// create a new user called chris
var chris = new User({
  name: 'Chris',
  username: 'sevilayha',
  password: 'password' 
});

// call the built-in save method to save to the database
chris.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});
}