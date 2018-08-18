module.exports = function (app) {

    app.get('/api/user/:userId/info', findInfosByUser);
    app.post('/api/user/:userId/info', createInfo);
    app.get('/api/user/:userId/info/:infoId', deleteInfo);



    var infoModel = require('../models/info/info.model.server');



    function createInfo(req, res) {
        var info = req.body;
        console.log('new info', info);
        infoModel.createInfo(info)
            .then(function (info){
                res.json(info);
            })
    }

    function findInfosByUser (req, res) {
        var userId = req.params['userId'];

        infoModel
            .findInfosByUser (userId)
            .then(function (infos) {
                res.json(infos);

            })
    }



    function deleteInfo(req, res) {
        var infoId = req.params['infoId'];

        infoModel
            .deleteInfo(infoId)
            .exec(function (err, infoId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(infoId)
                }

            })

    }




};