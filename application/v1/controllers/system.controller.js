const BaseCtr = require('./base.controller');
// Models
const EntityModel = require('../models/entity.model');
const VerifierModel = require('../models/verifier.model');
const FactorModel = require('../models/factor.model');
const AccessBodyModel = require('../models/access_body.model');
const CategoryModel = require('../models/category.model');

let entityModel = null;
let verifierModel = null;
let factorModel = null;
let accessBodyModel = null;
let categoryModel = null;

function SystemCtr() {

    entityModel = new EntityModel();
    verifierModel = new VerifierModel();
    factorModel = new FactorModel();
    accessBodyModel = new AccessBodyModel();
    categoryModel = new CategoryModel();

    this.Entity = {
        addEntity: function (req, routeCallback) {
            entityModel.insertEntity(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The entity [" + req.body.name + "] is added.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        updateEntity: function (req, routeCallback) {
            entityModel.updateEntity(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The entity ID [" + req.params.entity_id + "] is updated.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        getEntity: function (req, routeCallback) {
            if (req.params.entity_id) {
                entityModel.selectEntity(req.params.entity_id, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            } else {
                entityModel.selectEntity(null, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            }
        },
    };

    this.Verifier = {
        addVerifier: function (req, routeCallback) {
            verifierModel.insertVerifier(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Verifier [" + req.body.name + "] is added.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        updateVerifier: function (req, routeCallback) {
            verifierModel.updateVerifier(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Verifier ID [" + req.params.verifier_id + "] is updated.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        getVerifier: function (req, routeCallback) {
            if (req.params.verifier_id) {
                verifierModel.selectVerifier(req.params.verifier_id, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            } else {
                verifierModel.selectVerifier(null, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            }
        },
    };

    this.Factor = {
        addFactor: function (req, routeCallback) {
            factorModel.insertFactor(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Factor [" + req.body.name + "] is added.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        updateFactor: function (req, routeCallback) {
            factorModel.updateFactor(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Factor ID [" + req.params.factor_id + "] is updated.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        getFactor: function (req, routeCallback) {
            if (req.params.factor_id) {
                factorModel.selectFactor(req.params.factor_id, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            } else {
                factorModel.selectFactor(null, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            }
        },
    };

    this.Category = {
        addCategory: function (req, routeCallback) {
            categoryModel.insertCategory(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Category [" + req.body.name + "] is added.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        updateCategory: function (req, routeCallback) {
            categoryModel.updateCategory(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Category ID [" + req.params.factor_id + "] is updated.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        getCategory: function (req, routeCallback) {
            if (req.params.category_id) {
                categoryModel.selectCategory(req.params.category_id, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            } else {
                categoryModel.selectCategory(null, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            }
        },
    };

    this.AccessBody = {
        addAccessBody: function (req, routeCallback) {
            accessBodyModel.insertAccessBody(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Access Body [" + req.body.name + "] is added.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        updateAccessBody: function (req, routeCallback) {
            accessBodyModel.updateAccessBody(req, function (error, results) {
                if (!error) {
                    routeCallback(error, {
                        status: 1,
                        message: "The Access Body ID [" + req.params.access_bodies_id + "] is updated.",
                        data: results
                    });
                } else {
                    routeCallback(error, {status: 2, message: error, data: null});
                }
            });
        },
        getAccessBody: function (req, routeCallback) {
            if (req.params.access_bodies_id) {
                accessBodyModel.selectAccessBody(req.params.access_bodies_id, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            } else {
                accessBodyModel.selectAccessBody(null, function (error, results) {
                    if (!error) {
                        routeCallback(error, {
                            status: 1,
                            message: "You have " + (results.length) + " result(s)",
                            data: results
                        });
                    } else {
                        routeCallback(error, {status: 2, message: error, data: null});
                    }
                });
            }
        },
    };
}

util.inherits(SystemCtr, BaseCtr);
module.exports = SystemCtr;