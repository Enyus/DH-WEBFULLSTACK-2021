var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.index)

router.get('/login/', usersController.login);

router.get('/cadastro/', usersController.cadastro);

router.get('/logar/', usersController.autenticar);

module.exports = router;
