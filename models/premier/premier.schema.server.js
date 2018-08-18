var mongoose = require('mongoose');
var premSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    },
    location: String,
    Date: Date,
    couch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CouchModel'

    }

}, {collection: 'premier'});
module.exports = premSchema;