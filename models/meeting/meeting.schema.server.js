var mongoose = require('mongoose');
var meetingSchema = mongoose.Schema({
    lesson: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LessonModel"
    },
    couch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CouchModel"

    },
    trainee:[String],
    date: Date,
    location: String,



}, {collection: 'meeting'});
module.exports = meetingSchema;