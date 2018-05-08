"use strict";
function ResultBuilder(){
    this.resultObj = {
        'api_version': current_version,
        'transaction': {
            'error': null,
            'finishedAt': null,
        },
        'result': null
    };
}

ResultBuilder.init = function(){
    this.resultObj = {
        'api_version': current_version,
        'transaction': {
            'error': null,
            'finishedAt': null,
        },
        'result': null
    };
    return this;
};

ResultBuilder.generate = function(error, result){
    this.resultObj.transaction.error = error;
    this.resultObj.transaction.finishedAt = new Date();
    this.resultObj.result = result;
    return this.resultObj;
};

module.exports = ResultBuilder;