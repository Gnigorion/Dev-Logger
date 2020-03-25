const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const projectSchema = new Schema({
  name: {type: String, require: true},
  title: {type: String, require: true},
  content: {type: String, require: true},
  // title: {type: Schema.Types.ObjectId, ref: "Post"}
})

module.exports = mongoose.model('Project', projectSchema);
