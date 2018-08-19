var mongoose = require ('mongoose');
var unitSchema = require('./unit.schema.server')
var unitModel = mongoose.model('UnitModel', unitSchema);


function createUnit(unit){
    return unitModel.create(unit);
}

function findUnitsByCourse(courseId) {
    return unitModel.find({course: courseId})

}

function deleteUnit(unitId) {
    return unitModel.findByIdAndRemove(unitId);
}

function findAllUnits(unitId) {
    return unitModel.find({
        unitId: unitId
    });
}



module.exports = {
    createUnit: createUnit,
    findUnitsByCourse: findUnitsByCourse,
    findAllUnits: findAllUnits,
    deleteUnit: deleteUnit,
};