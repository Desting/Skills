var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Desting:UtNCMcq9UzPWdww2@cluster0-pnbrr.mongodb.net/test');
 
var db = mongoose.connection;
 
db.on('error', function (err) {
console.log('connection error', err);
});
db.once('open', function () {
console.log('connected.');




});

