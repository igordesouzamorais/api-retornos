'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const config = require('./app/config/config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors);

// conexao com o banco de dados
mongoose.connect(config.connectionString, {useNewUrlParser: true});

// rotas
const homeRoute = require('./app/routes/index');
const retornoRoute = require('./app/routes/retornos');
const analistaRoute = require('./app/routes/usuario');

// caminho das rotas

const pathRoute = '/api';

app.use('/', homeRoute);
app.use(`${pathRoute}/retornos`, retornoRoute);
app.use(`${pathRoute}/users`, analistaRoute);

module.exports = app;