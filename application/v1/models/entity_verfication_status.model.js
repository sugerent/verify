const BaseModel = require('./base.model');

function EntityVerificationModel(){

}

/**
 * put
 * @param params
 */
EntityVerificationModel.prototype.putEntityVerificationStatus = function (params){

};

/**
 * get
 * @param status_id
 */
EntityVerificationModel.prototype.getEntityVerificationStatus = function (status_id=null){
    if(!status_id){

    }else{

    }
};

/**
 * post
 * @param params
 */
EntityVerificationModel.prototype.postEntityVerificationStatus = function (params){

};

util.inherits(EntityVerificationModel, BaseModel);
module.exports = EntityVerificationModel;