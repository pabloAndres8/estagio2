const { truncate } = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Cadastro = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    senha: {
        type: String,
        required: true
    } 
});

mongoose.model('cadastros', Cadastro);
