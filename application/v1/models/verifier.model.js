const BaseModel = require('./base.model');

function VerifierModel() {
    /**
     * insert
     * @param req
     */
    this.insertVerifier = function (req, resultCallback) {
        db.query(
            {
                sql:
                "INSERT INTO " + BaseModel.dbVerifier + " (name, level) VALUES (?, ?, ?);",
                timeout: dbTimeout,
                values: [req.body.name, req.body.level]
            }, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
    /**
     * update
     * @param req
     */
    this.updateVerifier = function (req, resultCallback) {
        let body = req.body;
        let field_array = [];
        let queryStr = " SET ";
        if (body.name) {
            queryStr += "name = ?, ";
            field_array.push(body.name);
        }
        if (body.level) {
            queryStr += "level = ?, ";
            field_array.push(body.level);
        }
        if (body.is_used) {
            queryStr += "is_used = ?, ";
            field_array.push(body.is_used);
        }
        field_array.push(req.params.verifier_id);

        db.query(
            {
                sql:
                "UPDATE " + BaseModel.dbVerifier + queryStr + "updated = CURRENT_TIMESTAMP " +
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
     * @param verifier_id
     */
    this.selectVerifier = function (verifier_id = null, resultCallback) {
        let queryStr = "SELECT * FROM " + BaseModel.dbVerifier;
        if (verifier_id) {
            queryStr += " WHERE id = ?;";
        }

        let options = {
            sql: queryStr, timeout: dbTimeout, values: [verifier_id]
        };

        db.query(options, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
}

util.inherits(VerifierModel, BaseModel);
module.exports = VerifierModel;