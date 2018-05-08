const BaseModel = require('./base.model');

function KeypairsModel(){

}

/**
 * put
 * @param name
 */
KeypairsModel.prototype.putKeypairs = function (){

};

/**
 * get
 * @param keypairs_id
 */
KeypairsModel.prototype.getKeypairs = function (keypairs_id=null){
    if(!keypairs_id){

    }else{

    }
};


util.inherits(KeypairsModel, BaseModel);
module.exports = KeypairsModel;