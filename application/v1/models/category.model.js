const BaseModel = require('./base.model');

function CategoryModel(){
    /**
     * insert
     * @param req
     */
    this.insertCategory = function (req, resultCallback){
        db.query(
            {
                sql:
                "INSERT INTO " + BaseModel.dbCategory + " (name, parent_category_id) VALUES (?, ?);",
                timeout: dbTimeout,
                values: [req.body.name, req.body.parent_category_id]
            }, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
    /**
     * update
     * @param req
     */
    this.updateCategory = function (req, resultCallback){
        let body = req.body;
        let field_array = [];
        let queryStr = " SET ";
        if (body.name) {
            queryStr += "name = ?, ";
            field_array.push(body.name);
        }
        if (body.parent_category_id) {
            queryStr += "parent_category_id = ?, ";
            field_array.push(body.parent_category_id);
        }
        field_array.push(req.params.category_id);

        db.query(
            {
                sql:
                "UPDATE " + BaseModel.dbCategory + queryStr + "updated = CURRENT_TIMESTAMP " +
                "WHERE id = ?;",
                timeout: dbTimeout,
                values: field_array
            }, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
    /**
     * select
     * @param category_id
     */
    this.selectCategory = function (category_id=null, resultCallback){
        let queryStr = "SELECT * FROM " + BaseModel.dbCategory;
        if (category_id) {
            queryStr += " WHERE id = ?;";
        }

        let options = {
            sql: queryStr, timeout: dbTimeout, values: [category_id]
        };

        db.query(options, function (error, results, fields) {
                resultCallback(error, results);
            }
        );
    };
}

util.inherits(CategoryModel, BaseModel);
module.exports = CategoryModel;