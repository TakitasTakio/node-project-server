module.exports = function (app) {
    app.get('/api/admin', findAllAdmin);
    app.post('/api/admin', createAdmin);
    app.get('/api/admin/profile', profile);

    app.post('/api/admin/logout', logout);
    app.post('/api/admin/login',login);


    var adminModel = require('../models/admin/admin.model.server');

    function login(req, res) {
        var credentials = req.body;
        adminModel
            .findAdminByCredentials(credentials)
            .then(function (admin){
                req.session['currentAdmin'] = admin;
                res.json(admin);
            })
    }

    function findAllAdmin(req, res) {
        adminModel.findAllAdmin()
            .then(function (admins) {
                res.send(admins);

            })

    }

    function  createAdmin(req, res) {
        var user = req.body;
        adminModel.createAdmin(user)
            .then(function (admin){
                req.session['currentAdmin'] =admin;
                res.send(admin);
            })


    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }


    function profile(req, res) {
        res.send(req.session['currentAdmin']);

    }














};


