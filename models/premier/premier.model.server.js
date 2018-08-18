var mongoose = require ('mongoose');
var premSchema = require('./premier.schema.server');
var premModel = mongoose.model('PremierModel', premSchema);


function createPrem(prem){
    return premModel.create(prem);
}

function findPremsByUser(userId) {
    return premModel.find({user: userId})

}

function deletePrem(premId) {
    return premModel.findByIdAndRemove(premId);
}

function findAllPrems(premId) {
    return premModel.find({
        premId: premId
    });
}



module.exports = {
   createPrem: createPrem,
    findAllPrems: findAllPrems,
    findPremsByUser: findPremsByUser,
    deletePrem: deletePrem,

};