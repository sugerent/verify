const BaseModel = require('./base.model');

function OthersModel(){

}

OthersModel.prototype.TransactionStatus = {
    put:function(name){

    },
    post:function(t_status_id, name){

    },
    get:function(t_status_id){
        if(!t_status_id){

        }else{

        }
    }
}

OthersModel.prototype.StatelessToken = {
    put:function(keypairs_id, token){

    },
    post:function(keypairs_id, token){

    },
    get:function(keypairs_id){
        if(!keypairs_id){

        }else{

        }
    },
    delete:function(keypairs_id){

    }
}

util.inherits(OthersModel, BaseModel);
module.exports = OthersModel;