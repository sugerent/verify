var User = require ('../controllers/user.controller');

var router = express.Router();

var user = new User();

/**
 * GET
 */
/* users listing. */
router.get('/', function(req, res, next) {
    res.send(user.setRouteResult(true, JSON.stringify({message:'get'})));
});
/* one user */
router.get('/:uid', function(req, res, next) {
    // res.json({"message":"get keypair "+req.params.uid});
    res.send(user.setRouteResult(true, JSON.stringify({message: 'keypair=' + req.params.uid})));
});

/**
 * POST
 */
/* */
router.post('/', function(req, res, next){
    res.send (user.setRouteResult (true, JSON.stringify ({"result":req.body.message})));
});
/**
 * PUT
 */
// generate
router.put('/', function(req, res, next){

});
/**
 * DELETE
 */
router.delete('/', function(req, res, next){

});

module.exports = router;
