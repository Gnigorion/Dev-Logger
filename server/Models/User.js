var mongoose = require('mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    Name: {
        type: String,
        trim: true,
        default: null,
        required: true
    },
    id: {
        type: Number,
        trim: true,
        default: null,
        require : true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true
    },
    phone: {
          type:Number,
          trim:true,
          default:null

    },

    password: {
        type: String,
        trim: true,
        select:false
    },
    status: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
});


module.exports = mongoose.model('User', User);