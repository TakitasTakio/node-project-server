var mongoose = require ('mongoose');
var meetingSchema = require('./meeting.schema.server')
var meetingModel = mongoose.model('MeetingModel', meetingSchema);


function createMeeting(meeting){
    return meetingModel.create(meeting);
}

function findMeetingsByLesson(lessonId) {
    return meetingModel.find({lesson: lessonId})

}

function deleteMeeting(meetingId) {
    return meetingModel.findByIdAndRemove(meetingId);
}

function findAllMeetings(meetingId) {
    return meetingModel.find({
        meetingId: meetingId
    });
}



module.exports = {
    createMeeting: createMeeting,
    findAllMeetings: findAllMeetings,
    findMeetingsByLesson: findMeetingsByLesson,
    deleteMeeting: deleteMeeting,

};