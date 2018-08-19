var mongoose = require ('mongoose');
var matchSchema = require('./match.schema.server')
var matchModel = mongoose.model('MatchModel', matchSchema);


function createMatch(match){
    return matchModel.create(match);
}

function findMatchByMeeting(meetingId) {
    return matchModel.find({meeting: meetingId})

}

function deleteMatch(matchId) {
    return matchModel.findByIdAndRemove(matchId);
}

function findAllMatchs(matchId) {
    return matchModel.find({
        matchId: matchId
    });
}



module.exports = {
    createMatch: createMatch,
    findAllMatchs: findAllMatchs,
    findMatchByMeeting: findMatchByMeeting,
    deleteMatch: deleteMatch,

};