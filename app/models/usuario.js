'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    tipo: [{
        type: String,
        enum: ['admin', 'analista', 'telefonista'],
        default: 'analista',
        require: true
    }]
});

module.exports = mongoose.model('Usuario', usuarioSchema);