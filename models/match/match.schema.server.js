var mongoose = require('mongoose');
var matchSchema = mongoose.Schema({
    meeting: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "MeetingModel"
    },
    couch: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CouchModel"

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel"

    },




}, {collection: 'match'});
module.exports = matchSchema;