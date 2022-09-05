require('dotenv').config();
const http = require("http");
const express = require("express");
const { Sequelize } = require('sequelize');
const app = express();
const server = http.createServer(app);

const { database,  username , password } = process.env;

module.exports = db = {};

port = { API_PORT } = process.env.API_PORT;

const sequelize = new Sequelize( 'database', 'username', 'password', {
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão estabelecida com sucesso!');
  })
  .catch(err => {
    console.error('Não foi possívl estabelecer a conexão com o banco de dados.', err);
  });

app.get('/', (req, res) => {
    console.log('Hello World');
})

app.post('/login', (req, res) => {
    console.log('usuário logado!');
})

app.use(express());

server.listen(port, () => { 
    console.log(`Servidor rodando na porta ${port}`);
})