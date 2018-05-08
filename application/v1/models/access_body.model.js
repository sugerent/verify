const BaseModel = require('./base.model');

function AccessBodyModel(){

}

/**
 * put
 * @param name
 */
AccessBodyModel.prototype.putAccessBody = function (name){

};
/**
 * update
 * @param params
 */
AccessBodyModel.prototype.postAccessBody = function (params){

};
/**
 * get
 * @param access_body_id
 */
AccessBodyModel.prototype.getAccessBody = function (access_body_id=null){
    if(!access_body_id){

    }else{

    }
};


util.inherits(AccessBodyModel, BaseModel);
module.exports = AccessBodyModel;