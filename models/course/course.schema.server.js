var mongoose = require('mongoose');
var courseSchema = mongoose.Schema({
    title: String,
    units: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'UnitModel'
    }],

}, {collection: 'course'});
module.exports = courseSchema;