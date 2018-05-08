const BaseModel = require('./base.model');

function EntitiyFactorModel(){

}

/**
 * put
 * @param name
 */
EntitiyFactorModel.prototype.putEntityFactor = function (entitiy_id, factor_id){

};

/**
 * get
 * @param entity_id
 */
EntitiyFactorModel.prototype.getEntityFactor = function (entity_id=null){
    if(!entity_id){

    }else{

    }
};

/**
 * delete
 * @param entity_id
 * @param factor_id
 */
EntitiyFactorModel.prototype.deleteEntityFactor = function (entity_id, factor_id){

};


util.inherits(EntitiyFactorModel, BaseModel);
module.exports = EntitiyFactorModel;