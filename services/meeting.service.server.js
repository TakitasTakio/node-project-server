module.exports = function (app) {

    app.get('/api/lesson/:lessonId/meeting', findMeetingsByLesson);
    app.post('/api/lesson/:lessonId/meeting', createMeeting);
    app.get('/api/lesson/:lessonId/meeting/:meetingId', deleteMeeting);


    var meetingModel = require('../models/meeting/meeting.model.server');



    function createMeeting(req, res) {
        var meeting = req.body;
        console.log('new meeting', meeting);
        meetingModel.createMeeting(meeting)
            .then(function (meeting){
                res.json(meeting);
            })
    }

    function findMeetingsByLesson (req, res) {
        var lessonId = req.params['lessonId'];

        meetingModel
            .findMeetingsByLesson (lessonId)
            .then(function (meetings) {
                res.json(meetings);

            })
    }

    function deleteMeeting(req, res) {
        var meetingId = req.params['meetingId'];

        meetingModel
            .deleteMeeting(meetingId)
            .exec(function (err, meetingId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(meetingId)
                }

            })

    }




}