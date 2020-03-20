var express = require('express'),
    router = express.Router();
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
const db = require('./Utilities/mongooseConfig')


router.get('/', function(req,res,next){
  res.send('Hello from Server');
});


/* Get Post Data */
router.get('/dashboard',function(req,res,next){
  // if (err) throw err;
  db.posts.find().toArray(function(err, result) {
    console.log(result);
    console.log(result[0])
    console.log(result[0].title)
    res.send(result)
  });
  db.close();
});

// router.get('/dashboard/post',function(req,res,next){
//   var resultArray = [];
//   MongoClient.connect(url, function(err,db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     var data = dbo.collection("user").find()
//     dbo.collection("user").find().toArray(function(err, result) {
//       console.log(result);
//       console.log(result[0])
//       console.log(result[0].name)
//       res.send(result)
//     });
//     db.close();
//   });
// });

// router.get('/dashboard',function(req,res,next){
//   var resultArray = [];
//   MongoClient.connect(url, function(err,db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     var data = dbo.collection("user").find()
//     dbo.collection("posts").find().toArray(function(err, result) {
//       console.log(result);
//       console.log(result[0])
//       console.log(result[0].name)
//       res.send(result)
//     });
//     db.close();
//   });
// });

// router.post('/enroll',function(req,res,next){
//   console.log(req.body);
//   res.status(200).send({'message': 'Data Received'});
//   var data = {
//     name : req.body.name,
//     password: req.body.password
//   };
//   console.log(data);
//   MongoClient.connect(url, function(err,db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection("user").insertOne(data, function(err,res){
//       if (err) throw err;
//       console.log("Collection created Documents inserted.." + res.insertedCount);
//       db.close();
//     });
//   });
// });

module.exports = router;
