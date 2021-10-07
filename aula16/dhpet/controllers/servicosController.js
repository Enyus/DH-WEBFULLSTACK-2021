let servicos = require('../data/servicos.js')
// const path = require('path')
// const fs = require('fs')
const armazenaRegistro = require ('../utils/armazenaregristro')


module.exports = {
    index(req, res, next) {
      res.render('servicos', {
        title: "Serviços",
        servicos: servicos,
        });
    },
    cadastro(req,res,next) {
      res.render('cadastroservico', {
        title: "Cadastrar Serviço"
      })
    },
    cadastrar(req,res,next) {
      let {nome, preco, desc} = req.body;
      let { filename } = req.file
      let id = servicos.length + 1
      let objetoServico = {
        id: id,
        nome: nome,
        preco: preco,
        desc: desc,
        // caminhoImagem: `/uploads/servicoimg-${id}.png`
        caminhoImagem: filename
      };
      servicos.push(objetoServico);

      // let servicoString = JSON.stringify(servicos);
      // let caminhoServico = path.join('data', 'servicos.js')
      // fs.writeFileSync(caminhoServico, 'module.exports = ')
      // fs.appendFileSync(caminhoServico, servicoString)
      
      //Usando o "método global":
      armazenaRegistro(servicos, "servicos.js")

      res.render('cadastroservico', {title: "Sucesso", adicionado:true})
    }
  } 