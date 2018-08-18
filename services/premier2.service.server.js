module.exports = function (app) {

    app.get('/api/couch/:couchId/premier', findPrem2sByUser);
    app.post('/api/couch/:couchId/premier', createPrem2);
    app.get('/api/couch/:couchId/premier/:prem2Id', deletePrem2);



    var prem2Model = require('../models/premier2/premier2.model.server');



    function createPrem2(req, res) {
        var prem2 = req.body;
        console.log('new prem2', prem2);
        prem2Model.createPrem2(prem2)
            .then(function (prem2){
                res.json(prem2);
            })
    }

    function findPrem2sByUser (req, res) {
        var couchId = req.params['couchId'];

        prem2Model
            .findPrem2sByCouch (couchId)
            .then(function (prem2s) {
                res.json(prem2s);

            })
    }



    function deletePrem2(req, res) {
        var prem2Id = req.params['prem2Id'];

        prem2Model
            .deletePrem2(prem2Id)
            .exec(function (err, prem2Id ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(prem2Id)
                }

            })

    }




};