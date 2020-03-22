const express = require("express");
const Post = require('../Models/post');
const router = express.Router();



router.post("/post",(req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content
  });
  post.save().then(createdPost => {
    res.status(201).json({
    message: 'post Added Succesfully',
    postId: createdPost._id
    });
  });
});



router.put("/edit/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({_id: req.params.id}, post)
  .then(result => {
    res.status(200).json({message: "Updated Successfully!!"});
  })
})



router.get("",(req, res, next) => {
  Post.find()
  .then(documents => {
      res.status(200).json({
      message: 'Posts fetch Successfully',
      posts: documents
  })
  });
});



router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post=> {
    if(post){
      res.status(200).json(post);
    }else{
      res.status(404).json({message: 'Post Not Found'});
    }
  });
});



router.delete("/:id", (req, res, next) =>
  {
    Post.deleteOne({_id: req.params.id})
    .then(result => {
      console.log(result);
      res.status(200).json({message: 'The Post is deleted Successfully'});
    })
  })



  module.exports = router;
