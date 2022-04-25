const { truncate } = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cadastro = new Schema({
    nome: {
        type: String,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    } 
});

mongoose.model('cadastros', Cadastro);
