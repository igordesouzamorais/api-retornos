'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const config = require('./app/config/config');

//corrigir o warning do mongoose
mongoose.set('useCreateIndex', true);

// conexao com o banco de dados
mongoose.connect(config.connectionString, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if (err) console.log(err);
    
    console.log('banco de dados conectado');
});

// rotas
const homeRoute = require('./app/routes/index');
const retornoRoute = require('./app/routes/retornos');
const analistaRoute = require('./app/routes/usuario');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

// caminho das rotas

const pathRoute = '/api';

app.use('/', homeRoute);
app.use(`${pathRoute}/retornos`, retornoRoute);
app.use(`${pathRoute}/users`, analistaRoute);

module.exports = app;