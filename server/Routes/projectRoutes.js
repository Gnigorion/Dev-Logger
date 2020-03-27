const express = require("express");
const Project = require('../Models/project');
const Post = require('../Models/post');
const router = express.Router();

router.get('/post',(req, res) => {
  Project.find((err, docs) => {
    if(!err) {
      res.send(docs);
    }else{
      console.log("Error is retriving employees " + JSON.stringify(err, undefined, 2));
    }
  });
});

// router.get('/post',(req, res) => {
//   Project.find({ptitle:"post-1"}).populate('posts')
//     .exec((err, docs) => {
//       if(!err) {
//         res.send(docs);
//         console.log(docs);
//       }else{
//         console.log("Error is retriving employees " + JSON.stringify(err, undefined, 2));
//       }
//     });
// });



router.post('/post', (req, res) => {
  var project = new Project({
    _id: req.body.id,
    ptitle: req.body.ptitle,
    content: req.body.content,
  });
  project.save((err, docs) => {
    if(!err){
      res.send(docs);
    }else{
        console.log("Errors are in " + JSON.stringify(err, undefined, 2));
    }
  });


})


module.exports = router;
