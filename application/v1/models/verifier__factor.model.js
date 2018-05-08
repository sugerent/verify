const BaseModel = require('./base.model');

function VerifierFactorModel(){

}

/**
 * put
 * @param verifier_id
 * @param factor_id
 */
VerifierFactorModel.prototype.putVerifierFactor = function (verifier_id, factor_id){

};

/**
 * get
 * @param verifier_id
 */
VerifierFactorModel.prototype.getVerifierFactor = function (verifier_id=null){
    if(!verifier_id){

    }else{

    }
};

/**
 * post
 * @param params
 */
VerifierFactorModel.prototype.postVerifierFactor = function (params){

};


/**
 * delete
 * @param verifier_id
 * @param factor_id
 */
VerifierFactorModel.prototype.deleteVerifierFactor = function (verifier_id, factor_id){

};


util.inherits(VerifierFactorModel, BaseModel);
module.exports = VerifierFactorModel;