dbTimeout = 40000; // 40s
// sql
const sql = require('mysql');
// DB Connection
const DB = sql.createConnection({
    host: 'blockchain_vuc_db_1',
    user: 'driden',
    password: 'game1005',
    database: 'vuc'
});
DB.connect(function (err) {
    if(err){
        throw err;
    }
});
module.exports = DB;