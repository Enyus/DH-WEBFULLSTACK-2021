var express = require('express');
var router = express.Router();
var usersController = require('../controllers/usersController')

/* GET users listing. */
router.get('/', usersController.index)

router.get('/login/', usersController.login);

router.get('/cadastro/', usersController.cadastro);

router.post('/logar/', usersController.autenticar);

router.get('/logout/', usersController.deslogar);

router.post('/cadastrar/', usersController.cadastrar);

module.exports = router;
