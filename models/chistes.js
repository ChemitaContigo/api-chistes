var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var chistes = new Schema({
  title:    { type: String },
  type:     { type: Number },
  description:  { type: String },
  summary:  { type: String }
});

module.exports = mongoose.model('chiste', chistes);