'use strict';

const Usuario = require('../models/usuario');

exports.novo = async (data) => {
    let user = new Usuario();

    user.nome = data.nome;
    user.email = data.email;
    user.senha = data.senha;
    user.tipo = data.tipo;

    return await user.save();
};