const mongoose = require('mongoose');
var projectSchema = mongoose.Schema({
  ptitle: {type: String, require: true},
  content: {type: String, require: true}
})

module.exports = mongoose.model('Project', projectSchema);
