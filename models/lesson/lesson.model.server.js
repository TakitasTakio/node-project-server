var mongoose = require ('mongoose');
var lessonSchema = require('./lesson.schema.server')
var lessonModel = mongoose.model('LessonModel', lessonSchema);


function createLesson(lesson){
    return lessonModel.create(lesson);
}

function findLessonsByUnit(unitId) {
    return lessonModel.find({unit: unitId})

}

function deleteLesson(lessonId) {
    return lessonModel.findByIdAndRemove(lessonId);
}

function findAllLessons(lessonId) {
    return lessonModel.find({
        lessonId: lessonId
    });
}



module.exports = {
    createLesson: createLesson,
    findLessonsByUnit: findLessonsByUnit,
    deleteLesson: deleteLesson,
    findAllLessons: findAllLessons,

};