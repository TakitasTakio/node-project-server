module.exports = function (app) {
    app.get('/api/couch', findAllCouch);
    app.post('/api/couch', createCouch);
    app.get('/api/couch/profile', profile);
    app.get('/api/couch/:couchId', findCouchById);
    app.post('/api/couch/logout', logout);
    app.post('/api/couch/login',login);
    app.get('/api/couch/:couchId/delete', deleteCouch);
    app.put('/api/couch/:couchId', updateCouch);




    var couchModel = require('../models/couch/couch.model.server');





    function login(req, res) {
        var credentials = req.body;
        couchModel
            .findCouchByCredentials(credentials)
            .then(function (couch){
                req.session['currentCouch'] = couch;
                res.json(couch);
            })
    }

    function profile(req, res) {
        res.send(req.session['currentCouch']);

    }

    function findAllCouch(req, res) {
        couchModel.findAllCouch()
            .then(function (couchs) {
                res.send(couchs);

            })

    }

    function  createCouch(req, res) {
        var couch = req.body;
        couchModel.createCouch(couch)
            .then(function (couch){
                req.session['currentCouch'] =couch;
                res.send(couch);
            })


    }



    function deleteCouch(req, res) {
        var couchId = req.params['couchId'];

        couchModel.deleteCouch(couchId)
            .exec(function(err, couchId){
                if(err){
                    console.log('it is error')
                }
                else {
                    res.json(couchId)
                }
            })

    }

    function findCouchById (req, res) {
        var id = req.params['couchId'];
        couchModel.findCouchById(id)
            .then(function (couch) {
                res.json(couch);
            })


    }



    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

    function  updateCouch(req, res) {
        var couchId = req.params['couchId'];
        couchModel.updateCouch(couchId)
            .exec(function(err, couch) {
                if (err) {
                    console.log('error update')
                }
                else{
                    couch = req.body;
                    couchModel.createCouch(couch);

                    res.json(couch);
                }
            })


    }
};