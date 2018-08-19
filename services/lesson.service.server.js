module.exports = function (app) {

    app.get('/api/unit/:unitId/lesson', findLessonsByUnit);
    app.post('/api/unit/:unitId/lesson', createLesson);
    app.get('/api/unit/:unitId/lesson/:lessonId', deleteLesson);


    var lessonModel = require('../models/lesson/lesson.model.server');



    function createLesson(req, res) {
        var lesson = req.body;
        console.log('new lesson', lesson);
        lessonModel.createLesson(lesson)
            .then(function (lesson){
                res.json(lesson);
            })
    }

    function findLessonsByUnit (req, res) {
        var unitId = req.params['unitId'];

        lessonModel
            .findLessonsByUnit (unitId)
            .then(function (lessons) {
                res.json(lessons);

            })
    }

    function deleteLesson(req, res) {
        var lessonId = req.params['lessonId'];

        lessonModel
            .deleteLesson(lessonId)
            .exec(function (err, lessonId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(lessonId)
                }

            })

    }




}