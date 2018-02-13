var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb+srv://Desting:UtNCMcq9UzPWdww2@cluster0-pnbrr.mongodb.net/niktest';

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});