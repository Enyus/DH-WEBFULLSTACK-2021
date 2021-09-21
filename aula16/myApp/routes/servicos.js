var express = require('express');
var router = express.Router();

let servicosController = require('../controllers/servicosController');

/* GET home page. */
router.get ('/', servicosController.index)

module.exports = router;