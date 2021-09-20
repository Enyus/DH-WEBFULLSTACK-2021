// Projeto Colearning: TO-DO

const { request, response } = require('express');
var express = require('express');
const moment = require('moment');
const { v4 } = require("uuid")

var app = express();

app.use(express.json())


// Criar de um usuário com name e username

const usuarios = []

app.post ("/users", (request, response) => {
    const {name, username} = request.body
    const usuario = {userid: v4(), name, username, todos: []}
    usuarios.push(usuario)
    return response.json(usuario)
})


// Criar um novo TO-DO

allToDos = []

app.post("/todo", (request, response) => {
    const {userid, title, deadline} = request.body
    const todo = {todoid: v4(), title, done: false, deadline, created_at: moment()}
    userIndex = usuarios.findIndex( element => element.userid == userid)
    allToDos.push(todo)
    if(userIndex < 0) {
        return response.status(400).json({error: "Usuário não encontrado"})
    }
    usuarios[userIndex].todos.push(todo)
    return response.json(usuarios[userIndex])
})


// Listar todos os TO-DOs

app.get("/todo", (request, response) => {
    return response.json(allToDos)
})


// Alterar o title e deadline de um todo existente
// Está coslocando apenas os valores alterados

app.put("/todo", (request, response) => {
    const {userid, todoid, title, deadline} = request.body
    
    userIndex = usuarios.findIndex( element => element.userid == userid)
    if (userIndex < 0) {
        return response.status(400).json({error: "Usuário não encontrado"})
    }
    let usuario = usuarios[userIndex]
    
    todoIndex = usuarios[userIndex].todos.findIndex( element => element.todoid == todoid)
    if (todoIndex < 0) {
        return response.status(400).json({error: "ToDo não encontrado"})
    }
    
    usuario.todos[todoIndex].todoid = todoid
    usuario.todos[todoIndex].title = title
    usuario.todos[todoIndex].deadline = deadline

    usuarios[userIndex] = usuario

    return response.json(usuario)
})


// Marcar um TO-DO como feito
// está colocando apenas os valores alterados

app.put ("/todo", (request,response) => {
    const {userid, todoid} = request.body

    userIndex = usuarios.findIndex( element => element.userid == userid)
    if (userIndex < 0) {
        return response.status(400).json({error: "Usuário não encontrado"})
    }
        
    todoIndex = usuarios[userIndex].todos.findIndex( element => element.todoid == todoid)
    if (todoIndex < 0) {
        return response.status(400).json({error: "ToDo não encontrado"})
    }

    usuarios[userIndex].todos[todoIndex].done = true

    return response.json(usuarios[userIndex])
})


// Excluir um TO-DO
// não está funcionando

app.delete ("/todo", (request, response) => {
    const {userid, todoid} = request.body

    userIndex = usuarios.findIndex( element => element.userid == userid)
    if (userIndex < 0) {
        return response.status(400).json({error: "Usuário não encontrado"})
    }
        
    todoIndex = usuarios[userIndex].todos.findIndex( element => element.todoid == todoid)
    if (todoIndex < 0) {
        return response.status(400).json({error: "ToDo não encontrado"})
    }
  
    let usuario = usuarios[userIndex]
    usuario.todos.slice(todoIndex)

    return response.json(usuario)
})




app.listen(3333)