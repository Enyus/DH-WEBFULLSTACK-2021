const usuarios = require('../data/users')
const bcrypt = require('bcrypt')
const path = require('path')
const fs = require('fs')

module.exports = {
    index: (req, res, next) => {
      res.render('listaUsers', {title: "Lista de Usuários"})
    },

    login: (req, res, next) => {
      res.render('login', {title: "Entrar"});
    },

    cadastro: (req,res,next) => {
      res.render('cadastro', {title: "Cadastre-se"})
    },

    cadastrar(req, res, next) {
      let {nome, email, senha} = req.body
      
      senha = bcrypt.hashSync(senha, 10)
      
      let objetoUsuario = {
          id: usuarios.length + 1,
          nome: nome,
          email: email,
          senha: senha
      }
      
      usuarios.push(objetoUsuario)

      let dataString = JSON.stringify(usuarios);

      let caminhoArquivo = path.join('data', 'users.js')

      fs.writeFileSync(caminhoArquivo, 'module.exports = ')
      fs.appendFileSync(caminhoArquivo, dataString)

      res.render('login', {title: "Sucesso", adicionado:true})
    },

    autenticar: (req, res, next) => {
      const {email, senha} = req.body;
      let usuario = usuarios.find(usuario => usuario.email == email);
      
      if (!usuario) {
        return res.render('login', {
          title: "Login",
          erro: true,})
      }

      if (!bcrypt.compareSync(senha, usuario.senha)) {
        return res.render('login', {
          title: "Login",
          erro: true,})
      }

      let {senha: semSenha, ...usuarioSemSenha } = usuario

      req.session.usuario = usuarioSemSenha;

      res.render('index', {
        title: 'Petshop DH',
        usuario: req.session.usuario
      })
    },

    deslogar (req, res, next) {
      req.session.destroy();
      res.redirect('/')
    }
}