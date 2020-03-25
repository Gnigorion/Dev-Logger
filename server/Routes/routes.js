var express = require('express'),
    router = express.Router();
    mongoose = require('mongoose');
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/";
const db = require('../Utilities/mongooseConfig')
var Schema = mongoose.Schema;
var Project = require('../Models/project')


router.get('/', function(req,res,next){
  res.send('Hello from Server');
});


/* Get Project Data */
// router.get('/dashboard/project',function(req,res,next){
//   db.onnce('open',function(){
//     console.log('db connect');
//     db.collection('projects').aggregate([
//       {$lookup:
//         {
//           from: 'Post',
//           localField: 'name',
//           foreignField: 'name',
//           as: 'postdetails'
//         }
//       }
//     ]).toArray(function(err, result) {
//       console.log(JSON.stringify(result));
//       res.send(result)
//     });
//     db.close();
//   });
// });

// router.get("dashboard/project", function(req, res) {
//   console.log('hello')
//   Project.findOne({_id: req.params.id})
//   .then(function(result) {
//     console.log(result);
//     console.log('hello')
//   })
//   .catch(function(err) {
//     res.json(err);
//   });
// });

// router.get('/dashboard/project',function(req,res,next){
//   MongoClient.connect(url, function(err,db) {
//     if (err) throw err;
//     var dbo = db.db('mydb');
//     dbo.collection("employees").aggregate([
//       {$lookup:
//         {
//           from: 'posts',
//           localField: 'p_name',
//           foreignField: 'p_name',
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

router.get("dashboard/project", function(req,res) {
  Project.find()
  .then(function(dbProducts) {
    res.json(dbProducts);
  })
  .catch(function(err) {
    res.json(err);
  })
});

router.post("/project", function(req, res) {
  Project.create(req.body)
    .then(function(dbProduct) {
      // If we were able to successfully create a Product, send it back to the client
      res.json(dbProduct);
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
});

module.exports = router;
