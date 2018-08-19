var mongoose = require('mongoose');
var unitSchema = mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CourseModel"
    },
    title: String,
    lessons:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "LessonModel"
    }],

}, {collection: 'unit'});
module.exports = unitSchema;