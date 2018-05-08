const BaseModel = require('./base.model');

function EntityModel(){
    /**
     * insert
     * @param req
     */
    this.insertEntity = function (req, resultCallback){
        db.query(
            {
                sql:
                "INSERT INTO "+BaseModel.dbEntity+" (name) VALUES (?);",
                timeout:dbTimeout,
                values: [req.body.name]
            }, function (error, results, fields){
                resultCallback(error, results);
            }
        );
    };
    /**
     * update
     * @param req
     */
    this.updateEntity = function (req, resultCallback){
        db.query(
            {
                sql:
                "UPDATE "+BaseModel.dbEntity+" SET name = ?, updated = CURRENT_TIMESTAMP " +
                "WHERE id = ?;",
                timeout:dbTimeout,
                values: [req.body.name, req.params.entity_id]
            }, function (error, results, fields){
                resultCallback(error, results);
            }
        );
    };
    /**
     * get
     * @param entity_id
     */
    this.selectEntity = function (entity_id=null, resultCallback){
        let queryStr = "SELECT * FROM "+BaseModel.dbEntity;
        if(entity_id){
            queryStr += " WHERE id = ?;";
        }

        let options = {
            sql:queryStr, timeout:dbTimeout, values:[entity_id]
        };

        db.query(options, function (error, results, fields){
                resultCallback(error, results);
            }
        );
    };
}

util.inherits(EntityModel, BaseModel);
module.exports = EntityModel;