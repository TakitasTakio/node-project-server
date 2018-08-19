var mongoose = require('mongoose');
var courseSchema = require('./course.schema.server');
var courseModel = mongoose.model('CourseModel', courseSchema);





function createCourse(course) {
    return courseModel.create(course);
}

function findCourseById(courseId) {
    return courseModel.findById(courseId);
}

function findAllCourse(){
    return courseModel.find();

}

var api ={
    createCourse: createCourse,
    findAllCourse: findAllCourse,
    findCourseById: findCourseById,

};

module.exports =api;