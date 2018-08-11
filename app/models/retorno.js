'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const retornoSchema = new Schema({
    cliente: {
        type: String, 
        required: true,
        trim: true
    },
    empresa: {
        type: String,
        required: true,
        trim: true
    },
    contato: {
        type: String
    },
    observacao: {
        type: String,
        trim: true
    },
    prioridade: {
        type: String,
        required: true,
        enum: ['B', 'M', 'A'],
        default: 'B'
    },
    data_cadastro: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['P', 'A', 'F'],
        default: 'P'
    },
    protocolo: {
        type: String
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
});

module.exports = mongoose.model('Retorno', retornoSchema);