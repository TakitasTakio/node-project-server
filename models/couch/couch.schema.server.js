var mongoose = require('mongoose');
var couchSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    meetings2: [String],
    premier2: [String],
    info2: [String],
}, {collection: 'couch'});
module.exports = couchSchema;