var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Desting:UtNCMcq9UzPWdww2@cluster0-pnbrr.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});