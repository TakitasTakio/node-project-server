module.exports = function (app) {

    app.get('/api/course/:courseId/unit', findUnitsByCourse);
    app.post('/api/course/:courseId/unit', createUnit);
    app.get('/api/course/:courseId/unit/:unitId', deleteUnit);



    var unitModel = require('../models/unit/unit.model.server');



    function createUnit(req, res) {
        var unit = req.body;
        console.log('new unit', unit);
        unitModel.createUnit(unit)
            .then(function (unit){
                res.json(unit);
            })
    }

    function findUnitsByCourse (req, res) {
        var courseId = req.params['courseId'];

        unitModel
            .findUnitsByCourse (courseId)
            .then(function (units) {
                res.json(units);

            })
    }



    function deleteUnit(req, res) {
        var unitId = req.params['unitId'];

        unitModel
            .deleteUnit(unitId)
            .exec(function (err, unitId ) {
                if (err) {
                    console.log('It is error for deleting')
                }
                else{
                    res.json(unitId)
                }

            })

    }




};