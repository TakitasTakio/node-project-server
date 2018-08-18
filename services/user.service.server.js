module.exports = function (app) {
    app.get('/api/user', findAllUsers);
    app.post('/api/user', createUser);
    app.get('/api/user/profile', profile);
    app.get('/api/user/:userId', findUserById);
    app.post('/api/user/logout', logout);
    app.post('/api/user/login',login);
    app.get('/api/user/:userId/delete', deleteUser);
    app.put('/api/user/:userId', updateUser);




    var userModel = require('../models/user/user.model.server');





    function login(req, res) {
        var credentials = req.body;
        userModel
            .findUserByCredentials(credentials)
            .then(function (user){
                req.session['currentUser'] = user;
                res.json(user);
            })
    }

    function findAllUsers(req, res) {
        userModel.findAllUser()
            .then(function (users) {
                res.send(users);

            })

    }

    function  createUser(req, res) {
        var user = req.body;
        userModel.createUser(user)
            .then(function (user){
                req.session['currentUser'] =user;
                res.send(user);
            })


    }

    function profile(req, res) {
        res.send(req.session['currentUser']);

    }

    function deleteUser(req, res) {
        var userId = req.params['userId'];

        userModel.deleteUser(userId)
            .exec(function(err, userId){
                if(err){
                    console.log('it is error')
                }
                else {
                    res.json(userId)
                }
            })

    }

    function findUserById (req, res) {
        var id = req.params['userId'];
        userModel.findUserById(id)
            .then(function (user) {
                res.json(user);
            })


    }



    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function  updateUser(req, res) {
        var userId = req.params['userId'];
        userModel.updateUser(userId)
            .exec(function(err, user) {
                if (err) {
                    console.log('error update')
                }
                else{
                    user = req.body;
                    userModel.createUser(user);

                    res.json(user);
                }
            })


    }
};