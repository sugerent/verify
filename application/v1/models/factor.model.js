const BaseModel = require('./base.model');

function FactorModel(){
    /**
     * put
     * @param req
     */
    this.insertFactor = function (req, resultCallback){
        db.query(
            {
                sql:
                "INSERT INTO " + BaseModel.dbFactor + " (name, category_id, attest_level) VALUES (?, ?, ?);",
                timeout: dbTimeout,
                values: [req.body.name, req.body.category_id, req.body.attest_level]
            }, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
    /**
     * update
     * @param req
     */
    this.updateFactor = function (req, resultCallback){
        let body = req.body;
        let field_array = [];
        let queryStr = " SET ";
        if (body.name) {
            queryStr += "name = ?, ";
            field_array.push(body.name);
        }
        if (body.category_id) {
            queryStr += "category_id = ?, ";
            field_array.push(body.category_id);
        }
        if (body.attest_level) {
            queryStr += "category_id = ?, ";
            field_array.push(body.attest_level);
        }
        if (body.is_used) {
            queryStr += "is_used = ?, ";
            field_array.push(body.is_used);
        }
        field_array.push(req.params.factor_id);

        db.query(
            {
                sql:
                "UPDATE " + BaseModel.dbFactor + queryStr + "updated = CURRENT_TIMESTAMP " +
                "WHERE id = ?;",
                timeout: dbTimeout,
                values: field_array
            }, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
    /**
     * get
     * @param factor_id
     */
    this.selectFactor = function (factor_id=null, resultCallback){
        let queryStr = "SELECT * FROM " + BaseModel.dbFactor;
        if (factor_id) {
            queryStr += " WHERE id = ?;";
        }

        let options = {
            sql: queryStr, timeout: dbTimeout, values: [factor_id]
        };

        db.query(options, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
}

util.inherits(FactorModel, BaseModel);
module.exports = FactorModel;