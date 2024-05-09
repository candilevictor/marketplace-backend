const express = require('express');
const app = express();
const PORT = 3000; // Defina a porta do servidor

app.use(express.json()); // Responsável por fazer o parse do corpo das requisições HTTP com formato JSON

let tarefas = [];

// Rota para adicionar uma nova tarefa
app.post('/tarefas', (req, res) => {
    // Lógica para adicionar uma nova tarefa ao banco de dados
    const tarefa = req.body;
    tarefa.push(tarefa);
    res.json(tarefa);
});

// Rota para obter uma tarefas específica
app.get('/tarefas', (req, res) => {
    // Lógica para obter e retornar todas as tarefas do banco de dados
 });
 
 // Rota para obter todas as tarefas
 app.get('/tarefas/:id', (req, res) => {
     // Lógica para obter uma tarefas do banco de dados pelo seu ID
 });
 // Rota para editar uma tarefa existente
 app.put('/tarefas/:id', (req, res) => {
     // Lógica para editar uma tarefa no banco de dados com base no ID
 });
 
 // Rota para excluir uma tarefa
 app.delete('/tarefas/:id', (req, res) => {
     // Lógica para excluir uma tarefa do banco de dados com base no ID
 });
 
 // Inicie o servidor Express:
 app.listen(PORT, () => {
     console.log(`Servidor rodando na porta em http://localhost:${PORT}`);
 });