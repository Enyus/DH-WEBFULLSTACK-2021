const { request, response } = require('express');
var express = require('express');
const { relativeTimeRounding } = require('moment');
const { v4 } = require("uuid")

var app = express();

app.use(express.json())

// Métodos HTTP:
// Get - Listar
// Post - Criar
// Put - Atualizar
// Delete - Deletar

const usuarios = []


//listar usuários:
app.get("/users", (request, response) => {
    return response.json(usuarios)
})

//Criar usuários:
app.post("/users", (request, response) => {
    const {nome, sobrenome, sexo, data, contato} = request.body

    const usuario = {id: v4(), nome, sobrenome, sexo, data, contato}
    
    usuarios.push(usuario)

    return response.json(usuario)
})


// Alterar um usuário:
app.put("/users/:id", (request, response) => {
    const { id } = request.params
    const {nome, sobrenome, sexo, data, contato} = request.body

    const userIndex = usuarios.findIndex( usuario => usuario.id === id)

    if(userIndex < 0) {
        return response.status(400).json({error: "Usuário não encontrado"})
    }

    const usuario = {
        id,
        nome,
        sobrenome,
        sexo,
        data,
        contato
    }

    usuarios[userIndex] = usuario

    return response.json(usuario)
})
// Se não usar o parâmetro :id, altera toda a lista de usuários.


// Deletando um usuário:
app.delete("/users/:id", (request, response) => {
    const { id } = request.params
    
    const userIndex = usuarios.findIndex( usuario => usuario.id === id)

    if(userIndex < 0) {
        return response.status(400).json({error: "Usuário não encontrado"})
    }

    usuarios.splice(userIndex, 1)

    return response.status(204).send()
})


app.listen(3333)

