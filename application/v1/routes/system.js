const ResultBuilder = require('../../Utils/ResultBuilder');
const SystemCtr = require('../controllers/system.controller');

const router = express.Router();

// init Class
const systemCtr = new SystemCtr();

// URI Patterns
const ENTITY = '/entity/';
const VERIFIER = '/verifier/';
const FACTOR = '/factor/';
const ATTRIBUTE = '/attribute/';
const ACCESS_BODY = '/access_body/';
const CATEGORY = '/category/';

/**
 * Entity - v1 : 20180507 finished
 */
// POST - CREATE, req.body
router.post(ENTITY, function (req, res) {
    systemCtr.Entity.addEntity(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
// PUT - UPDATE, req.body, req.params.entity_id
router.put(ENTITY + ':entity_id', function (req, res) {
    systemCtr.Entity.updateEntity(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
// GET - SELECT
router.get(ENTITY, function (req, res) {

    systemCtr.Entity.getEntity(req.params, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.get(ENTITY + ':entity_id', function (req, res) {
    systemCtr.Entity.getEntity(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});

/**
 * Verifier - v1 : 20180507 finished
 */
// POST - CREATE
router.post(VERIFIER, function (req, res) {
    systemCtr.Verifier.addVerifier(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
// PUT - UPDATE
router.put(VERIFIER + ':verifier_id', function (req, res) {
    systemCtr.Verifier.updateVerifier(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
// GET - SELECT
router.get(VERIFIER + ':verifier_id', function (req, res) {
    let result = systemCtr.Verifier.getVerifier(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});

/**
 * Factor - v1 : 20180507 finished
 */
router.post(FACTOR, function (req, res) {
    systemCtr.Factor.addFactor(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.put(FACTOR + ':factor_id', function (req, res) {
    systemCtr.Factor.updateFactor(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.get(FACTOR + ':factor_id', function (req, res) {
    systemCtr.Factor.getFactor(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});

/**
 * Category - v1 : 20180507 finished
 */
router.post(CATEGORY, function (req, res) {
    systemCtr.Category.addCategory(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.put(CATEGORY + ':category_id', function (req, res) {
    systemCtr.Category.updateCategory(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.get(CATEGORY + ':category_id', function (req, res) {
    systemCtr.Category.getAttribute(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});

/**
 * Access Body
 */
router.post(ACCESS_BODY, function (req, res) {
    systemCtr.AccessBody.addAccessBody(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.put(ACCESS_BODY + ':access_bodies_id', function (req, res) {
    systemCtr.AccessBody.updateAccessBody(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});
router.get(ACCESS_BODY + ':access_bodies_id', function (req, res) {
    systemCtr.AccessBody.getAccessBody(req, function (error, result) {
        res.send(ResultBuilder.init().generate(error, result));
    });
});

module.exports = router;
