var mongoose = require ('mongoose');
var info2Schema = require('./info2.schema.server')
var info2Model = mongoose.model('Info2Model', info2Schema);


function createInfo2(info2){
    return info2Model.create(info2);
}

function findInfo2sByCouch(couchId) {
    return info2Model.find({couch: couchId})

}

function deleteInfo2(info2Id) {
    return info2Model.findByIdAndRemove(info2Id);
}

function findAllInfo2s(info2Id) {
    return info2Model.find({
        info2Id: info2Id
    });
}



module.exports = {
    createInfo2: createInfo2,
    findInfo2sByCouch: findInfo2sByCouch,
    deleteInfo2: deleteInfo2,
    findAllInfo2s: findAllInfo2s,

};