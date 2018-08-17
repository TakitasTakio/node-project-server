var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');
var userModel = mongoose.model('UserModel', userSchema);


function findUserByCredentials(credentials){
    return userModel.findOne(credentials);

}


function createUser(user) {
    return  userModel.create(user);
}

function findUserById(userId) {
    return userModel.findById(userId);
}

function findAllUser(){
    return userModel.find();
}


function deleteUser(userId) {
    return userModel.findByIdAndRemove(userId)
}

function updateUser(userId){
    return userModel.findById(userId)
}


var api ={
    createUser: createUser,
    findAllUser: findAllUser,
    findUserById: findUserById,
    findUserByCredentials: findUserByCredentials,
    deleteUser: deleteUser,
    updateUser: updateUser,

};

module.exports =api;