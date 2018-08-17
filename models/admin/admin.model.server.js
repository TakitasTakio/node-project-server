var mongoose = require('mongoose');
var adminSchema = require('./admin.schema.server');
var adminModel = mongoose.model('AdminModel', adminSchema);

function findAdminByCredentials(credentials){
    return adminModel.findOne(credentials);

}


function createAdmin(admin) {
    return  adminModel.create(admin);
}


function findAdminById(adminId) {
    return adminModel.findById(adminId);

}

function findAllAdmin(){
    return adminModel.find();
}

function deleteAdmin(adminId) {
    return adminModel.findByIdAndRemove(adminId);
}

module.exports = {
    createAdmin: createAdmin,
    findAdminByCredentials: findAdminByCredentials,
    findAdminById: findAdminById,
    findAllAdmin: findAllAdmin,
    deleteAdmin: deleteAdmin,
};





