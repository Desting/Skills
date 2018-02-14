var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Desting:UtNCMcq9UzPWdww2@cluster0-pnbrr.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var users = [
    { name: 'Nikolaj', skill: 'Dancing'},
    { name: 'Peter', skill: 'Presentations'},
    { name: 'Mikkel', skill: 'Martial arts'},
    { name: 'John', skill: 'Tennis'},
    { name: 'Peter', skill: 'Basketball'},
    { name: 'Amy', skill: 'Football'},
    { name: 'Hannah', skill: 'Cooking'},
    { name: 'Michael', skill: 'Language'},
    { name: 'Sandy', skill: 'Fitness'},
    { name: 'Betty', skill: 'Swimming'},
    { name: 'Richard', skill: 'Gymnastics'},
    { name: 'Susan', skill: 'Ballet'},
    { name: 'Vicky', skill: 'Piano'},
    { name: 'Ben', skill: 'Guitar'},
    { name: 'William', skill: 'Singing'},
    { name: 'Chuck', skill: 'Baking'},
    { name: 'Viola', skill: 'Gardening'}
  ];

 


  dbo.collection("users").insertMany(users, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted in users: " + res.insertedCount);
  
    db.close();
  });

 

});