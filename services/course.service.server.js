module.exports = function (app) {
    app.get('/api/course', findAllCourses);
    app.post('/api/course', createCourse);
    app.get('/api/course/:courseId', findCourseById);
    var courseModel = require('../models/course/course.model.server');


    function findAllCourses(req, res) {
        courseModel.findAllCourse()
            .then(function (courses) {
                res.send(courses);

            })

    }

    function  createCourse(req, res) {
        var course = req.body;
        courseModel.createCourse(course)
            .then(function (course){
                res.send(course);
            })


    }

    function findCourseById (req, res) {
        var id = req.params['courseId'];
        courseModel.findCourseById(id)
            .then(function(course) {
                res.json(course);
            })

    }
}