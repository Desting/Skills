mongoose.connect('mongodb://Desting:UtNCMcq9UzPWdww2@cluster0-shard-00-00-pnbrr.mongodb.net:27017,cluster0-shard-00-01-pnbrr.mongodb.net:27017,cluster0-shard-00-02-pnbrr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin');
 
var db = mongoose.connection;
db.on('error', function (err) {
  console.log('connection error', err);
});
db.once('open', function () {
  console.log('connected.');
});