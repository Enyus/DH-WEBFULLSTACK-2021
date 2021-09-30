var express = require('express');
var router = express.Router();
let contatoController = require('../controllers/contatoController');

router.get('/', contatoController.index)

router.post('/cadastrar', contatoController.cadastrar)

module.exports = router