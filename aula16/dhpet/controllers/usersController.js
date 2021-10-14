const usuarios = require('../data/users')

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
    autenticar: (req, res, next) => {
      const {email, senha} = req.body;
      let usuario = usuarios.find(usuario => usuario.email == email);
      
      if (!usuario) {
        return res.render('login', {
          title: "Login",
          erro: true})
      }

      if (usuario.senha != senha) {
        return res.render('login', {
          title: "Login",
          erro: true})
      }
    }
}