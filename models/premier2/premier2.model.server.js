var mongoose = require ('mongoose');
var prem2Schema = require('./premier2.schema.server');
var prem2Model = mongoose.model('Premier2Model', prem2Schema);


function createPrem2(prem2){
    return prem2Model.create(prem2);
}

function findPrem2sByCouch(couchId) {
    return prem2Model.find({couch: couchId})

}

function deletePrem2(prem2Id) {
    return prem2Model.findByIdAndRemove(prem2Id);
}

function findAllPrem2s(prem2Id) {
    return prem2Model.find({
        prem2Id: prem2Id
    });
}



module.exports = {
    createPrem2: createPrem2,
    findAllPrem2s: findAllPrem2s,
    findPrem2sByCouch: findPrem2sByCouch,
    deletePrem2: deletePrem2,

};