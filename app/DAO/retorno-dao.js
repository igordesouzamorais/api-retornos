'use strict';

const Retorno = require('../models/retorno');

exports.novo = async (data) => {

    let retorno = new Retorno();

    retorno.cliente = data.cliente;
    retorno.empresa = data.empresa;
    retorno.observacao = data.observacao;
    retorno.contato = data.contato;
    retorno.prioridade = data.prioridade;
    retorno.usuario  = data.usuario;

    return await retorno.save();
};

exports.listar = async () => {
    return await Retorno.find({}).populate('usuario', 'nome email tipo');
};