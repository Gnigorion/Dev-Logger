var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("employees").aggregate([
    {$lookup:
      {
        from: 'posts',
        localField: 'e_id',
        foreignField: 'p_id',
        as: 'postdetails'
      }
    }
  ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
