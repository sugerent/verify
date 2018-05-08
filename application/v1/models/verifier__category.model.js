const BaseModel = require('./base.model');

function VerifierCategoryModel(){

}

/**
 * put
 * @param verifier_id
 * @param category_id
 */
VerifierCategoryModel.prototype.putVerifierCategory = function (verifier_id, category_id){

};

/**
 * get
 * @param verifier_id
 */
VerifierCategoryModel.prototype.getVerifierCategory = function (verifier_id=null){
    if(!verifier_id){

    }else{

    }
};

/**
 * post
 * @param params
 */
VerifierCategoryModel.prototype.postVerifierCategory = function (params){

};


/**
 * delete
 * @param verifier_id
 * @param category_id
 */
VerifierCategoryModel.prototype.deleteVerifierCategory = function (verifier_id, category_id){

};


util.inherits(VerifierCategoryModel, BaseModel);
module.exports = VerifierCategoryModel;