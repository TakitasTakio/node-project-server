var mongoose = require('mongoose');
var lessonSchema = mongoose.Schema({
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UnitModel"
    },
    title: String,
    meetings:[String],

}, {collection: 'lesson'});
module.exports = lessonSchema;