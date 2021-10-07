var express = require('express');
var router = express.Router();
// const path = require('path')
// const multer = require('multer')
// const upload = require('../middlewares/uploadMiddleware')
let servicos = require('../data/servicos.js')

let servicosController = require('../controllers/servicosController');

let id = servicos.length+1

// Tentando fazer o Multer Funcionar: (04/10/2021)
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, path.join(__dirname, '../public/uploads'))
//     },
//     filename: function (req, file, cb) {
//       cb(null, file.originalname)
//     }
//   })
// const upload = multer({ storage: storage})
// Multer passado para a pasta Middlewares (06/10/2021)

/* GET home page. */
router.get ('/', servicosController.index)
router.get ('/cadastro', servicosController.cadastro)
router.post('/cadastrar', /*upload.single('servicoimg'),*/ servicosController.cadastrar)

module.exports = router;