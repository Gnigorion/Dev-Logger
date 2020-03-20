const express = require("express");
const router = express.Router({ mergeParams: true });
const authService = require("../Services/auth");
const db = ("../Utilities/mongooseConfig");
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";

// router.get('/', function(req,res,next){
//   res.send('Hello from Server');
// });

/* User Registration. */
router.post("/register", authService.register);


/* User Login. */
router.post("/login", authService.login);


// /* Get Post */
// router.get('/dashboard/project',function(req,res,next){

//       db.collection("posts").aggregate([
//         {$lookup:
//           {
//             from: 'posts',
//             localField: 'e_id',
//             foreignField: 'p_id',
//             as: 'postdetails'
//           }
//         }
//       ]).toArray(function(err, result) {
//         console.log(result);
//         res.send(result)
//       });
//       db.close();
//     });

/* Get Post Data */
router.get('/dashboard',function(req,res,next){
    if (err) throw err;
    db.collection("posts").find().toArray(function(err, result) {
      console.log(result);
      console.log(result[0])
      console.log(result[0].title)
      res.send(result)
    });
    db.close();
  });


// /* Project Get Data */
// router.get('/dashboard/project',function(req,res,next){
//   var resultArray = [];
//   MongoClient.connect(url, function(err,db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection("employees").aggregate([
//       {$lookup:
//         {
//           from: 'posts',
//           localField: 'e_id',
//           foreignField: 'p_id',
//           as: 'postdetails'
//         }
//       }
//     ]).toArray(function(err, result) {
//       console.log(result);
//       res.send(result)
//     });
//     db.close();
//   });
// });

// /* Create Post Data */
// router.get('/dashboard/post',function(req,res,next){
//   var resultArray = [];
//   MongoClient.connect(url, function(err,db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     var data = dbo.collection("user").find()
//     dbo.collection("user").find().toArray(function(err, result) {
//       console.log(result);
//       res.send(result)
//     });
//     db.close();
//   });
// });

// /* Get Post Data */
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


module.exports = router;
