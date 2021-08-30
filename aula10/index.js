// importanto o módulo express
const express = require('express')

//instanciando/criando a aplicação express e armazenando na variável app
const app = express()

// app.get('/usuario', (req, res) => {
//     return res.send('Cássio')
// })



// GET method route
// app.get('/', function (req, res) {
//     res.send('GET request to the homepage');
//   });
  
// POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage');
    });


    app.listen(3333, () => {
        console.log('Servidor rodando na porta http://localhost:3333')
    })