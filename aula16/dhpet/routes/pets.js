var express = require('express');
var router = express.Router();

let petsController = require('../controllers/petsController');

/* GET home page. */
router.get ('/', petsController.index)
// router.get('/', function(req, res, next) {
// //   res.render('index', { title: 'Pets' });
//     return res.json("Pets aqui")
// });

// Criando 
router.get ('/:fav', petsController.fav)

module.exports = router;