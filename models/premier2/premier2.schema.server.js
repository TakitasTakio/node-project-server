var mongoose = require('mongoose');
var prem2Schema = mongoose.Schema({
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

}, {collection: 'premier2'});
module.exports = prem2Schema;