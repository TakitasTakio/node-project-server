var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    meetings: [String],
    premier: [String],
    info: [String],
}, {collection: 'users'});
module.exports = userSchema;
