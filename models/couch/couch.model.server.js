var mongoose = require('mongoose');
var couchSchema = require('./couch.schema.server');
var couchModel = mongoose.model('CouchModel', couchSchema);


function findCouchByCredentials(credentials){
    return couchModel.findOne(credentials);

}


function createCouch(couch) {
    return  couchModel.create(couch);
}

function findCouchById(couchId) {
    return couchModel.findById(couchId);
}

function findAllCouch(){
    return couchModel.find();
}


function deleteCouch(couchId) {
    return couchModel.findByIdAndRemove(couchId)
}

function updateCouch(couchId){
    return couchModel.findById(couchId)
}


var api ={
    createCouch: createCouch,
    findCouchByCredentials: findCouchByCredentials,
    findAllCouch: findAllCouch,
    findCouchById: findCouchById,
    deleteCouch: deleteCouch,
    updateCouch: updateCouch,

};

module.exports =api;