var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("DevLogger");
  dbo.collection("users").find().toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    console.log(res);
    db.close();
  });
});
