module.exports = function (app) {

    app.get('/api/couch/:couchId/info2', findInfo2sByCouch);
    app.post('/api/couch/:couchId/info2', createInfo2);
    app.get('/api/couch/:couchId/info2/:info2Id', deleteInfo2);



    var info2Model = require('../models/info2/info2.model.server');



    function createInfo2(req, res) {
        var info2 = req.body;
        console.log('new info2', info2);
        info2Model.createInfo2(info2)
            .then(function (info2){
                res.json(info2);
            })
    }

    function findInfo2sByCouch (req, res) {
        var couchId = req.params['couchId'];

        info2Model
            .findInfo2sByCouch(couchId)
            .then(function (info2s) {
                res.json(info2s);

            })
    }



    function deleteInfo2(req, res) {
        var info2Id = req.params['info2Id'];

        info2Model
            .deleteInfo2(info2Id)
            .exec(function (err, info2Id ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(info2Id)
                }

            })

    }




};