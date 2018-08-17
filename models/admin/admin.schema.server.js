var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,

}, {collection: 'admin'});
module.exports = userSchema;