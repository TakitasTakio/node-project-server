var mongoose = require('mongoose');
var infoSchema = mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
  },
  firstName: String,
  lastName: String,
  birthDate: Date,
  height: Number,
  weight: Number,
  bodyFat: Number,
  image: String,

}, {collection: 'info'});
module.exports = infoSchema;