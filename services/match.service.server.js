module.exports = function (app) {

    app.get('/api/meeting/:meetingId/match', findMatchsByMeeting);
    app.post('/api/meeting/:meetingId/match', createMatch);
    app.get('/api/meeting/:meetingId/match/:matchId', deleteMatch);


    var matchModel = require('../models/match/match.model.server');



    function createMatch(req, res) {
        var match = req.body;
        console.log('new match', match);
        matchModel.createMatch(match)
            .then(function (match){
                res.json(match);
            })
    }

    function findMatchsByMeeting (req, res) {
        var meetingId = req.params['meetingId'];

        matchModel
            .findMatchByMeeting (meetingId)
            .then(function (matchs) {
                res.json(matchs);

            })
    }

    function deleteMatch(req, res) {
        var matchId = req.params['matchId'];

        matchModel
            .deleteMatch(matchId)
            .exec(function (err, matchId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(matchId)
                }

            })

    }




}