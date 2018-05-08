const BaseModel = require('./base.model');

/**
 * AccessBody - Factor association
 * @constructor
 */
function AccessBodyFactorPermissonModel(){

}

/**
 * put
 * @param name
 */
AccessBodyFactorPermissonModel.prototype.putAccessbodyFactor = function (accessbody_id, factor_id){

};

/**
 * get
 * @param accessbody_id
 */
AccessBodyFactorPermissonModel.prototype.getAccessbodyFactor = function (accessbody_id=null){
    if(!accessbody_id){

    }else{

    }
};

/**
 * post
 * @param accessbody_id
 * @param factor_id
 */
AccessBodyFactorPermissonModel.prototype.postAccessbodyFactor = function (accessbody_id, factor_id){

};

/**
 * delete
 * @param accessbody_id
 * @param factor_id
 */
AccessBodyFactorPermissonModel.prototype.deleteAccessbodyFactor = function (accessbody_id, factor_id){

};


util.inherits(AccessBodyFactorPermissonModel, BaseModel);
module.exports = AccessBodyFactorPermissonModel;