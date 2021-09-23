let servicos = require('../data/servicos.js')

module.exports = {
    index(req, res, next) {
      res.render(servicos, {title: "Serviços"});
    },
  } 