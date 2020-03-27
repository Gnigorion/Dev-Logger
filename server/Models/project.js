const mongoose = require('mongoose');
const Post = require('./post');

var projectSchema = mongoose.Schema({
  ptitle: {type: String, require: true},
  content: {type: String, require: true},
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
})

module.exports = mongoose.model('Project', projectSchema);
