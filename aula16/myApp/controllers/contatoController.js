let contatos = require('../data/contato.js')
const path = require('path')
const fs = require('fs')

module.exports = {
    index(req, res, next) {
        res.render('contato', {title: "Contato"});
    },
    cadastrar(req, res, next) {
        let {nome, email, mensagem} = req.body
        let objetoContato = {
            id: contatos.length + 1,
            nome: nome,
            email: email,
            mensagem: mensagem
        }
        // let objetoContato = {id:contatos.length+1, ...req.body}
        // Com o spread operator (...), ele desestrutura o objeto do req.body automaticamente! Mas quebrou, huahauhuah
        // res.send(objetoContato)

        // adicionando objeto dentro do array contatos:
        contatos.push(objetoContato)

        // transformando o array contatos em uma string para sobrescrever o conteúdo anterior de data/contatos.js:
        let dataString = JSON.stringify(contatos);

        //obtendo caminho até o arquivo data/contato.js para não sobrescrever arquivos incorretos:
        let caminhoArquivo = path.join('data', 'contato.js')

        // Sobrescrever o conteúdo do arquivo data/contato.js:
        fs.writeFileSync(caminhoArquivo, 'let contatos = ')
        fs.appendFileSync(caminhoArquivo, dataString)
        fs.appendFileSync(caminhoArquivo, ' module.exports = contatos')

        res.render('contato', {title: "Sucesso", adicionado:true})
    }
  } 