module.exports = function (app) {

    app.get('/api/user/:userId/premier', findPremsByUser);
    app.post('/api/user/:userId/premier', createPrem);
    app.get('/api/user/:userId/premier/:premId', deletePrem);



    var premModel = require('../models/premier/premier.model.server');



    function createPrem(req, res) {
        var prem = req.body;
        console.log('new prem', prem);
        premModel.createPrem(prem)
            .then(function (prem){
                res.json(prem);
            })
    }

    function findPremsByUser (req, res) {
        var userId = req.params['userId'];

        premModel
            .findPremsByUser (userId)
            .then(function (prems) {
                res.json(prems);

            })
    }



    function deletePrem(req, res) {
        var premId = req.params['premId'];

        premModel
            .deletePrem(premId)
            .exec(function (err, premId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(premId)
                }

            })

    }




};