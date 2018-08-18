var mongoose = require ('mongoose');
var infoSchema = require('./info.schema.server')
var infoModel = mongoose.model('InfoModel', infoSchema);


function createInfo(info){
    return infoModel.create(info);
}

function findInfosByUser(userId) {
    return infoModel.find({user: userId})

}

function deleteInfo(infoId) {
    return infoModel.findByIdAndRemove(infoId);
}

function findAllInfos(infoId) {
    return infoModel.find({
        infoId: infoId
    });
}



module.exports = {
    createInfo: createInfo,
    findInfosByUser: findInfosByUser,
    deleteInfo: deleteInfo,
    findAllInfos: findAllInfos,

};