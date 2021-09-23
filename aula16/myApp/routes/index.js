var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DH Petshop' });
});

/* GET Página Sobre. */
router.get('/sobre', function(req, res, next) {
  res.render('sobre', { title: 'Sobre' });
});

/* GET Página Cadastro: */
router.get('/cadastro', function(req, res, next) {
  res.render('cadastro', { title: 'Cadastro' });
});

/* GET Página Contato: */
router.get('/contato', function(req, res, next) {
  res.render('contato', { title: 'Contato' });
});

/* GET Página Login: */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

/* GET Página Serviços: */
router.get('/servicos', function(req, res, next) {
  res.render('servicos', { title: 'Serviços' });
});

module.exports = router;
