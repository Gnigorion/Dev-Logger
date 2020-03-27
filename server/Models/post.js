const mongoose = require('mongoose');
const Project = require('./project');

const postSchema = mongoose.Schema({
  title: {type: String, require: true},
  content: {type: String, require: true},
  p_name: {type: String, require: true}
})

module.exports = mongoose.model('Post', postSchema);
