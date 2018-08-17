var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    meetings: [String],
    premier: [String],
}, {collection: 'users'});
module.exports = userSchema;
