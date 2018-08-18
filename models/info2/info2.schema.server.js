var mongoose = require('mongoose');
var info2Schema = mongoose.Schema({
    couch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CouchModel'
    },
    firstName: String,
    lastName: String,
    birthDate: Date,
    height: Number,
    weight: Number,
    bodyFat: Number,
    image: String,

}, {collection: 'info2'});
module.exports = info2Schema;