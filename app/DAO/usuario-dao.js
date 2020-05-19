'use strict';

const Usuario = require('../models/usuario');
const Crypto = require('../utils/Crypt');

exports.novo = async (data) => {
    let user = new Usuario();

    let senhaNova = await Crypto.criptografar(data.senha);
    
    user.nome = data.nome;
    user.email = data.email;
    user.senha = senhaNova;
    user.tipo = data.tipo;

    return await user.save();
};