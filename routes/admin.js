const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require('../models/Cadastro');
const Cadastro = mongoose.model('cadastros');

router.get('/', (req, res) => {
    res.render('admin/index');
});

router.get('/cadastro', (req, res) => {
    res.render('admin/cadastro');
});

router.get('/login', (req, res) => {
    res.render('admin/login');
});

router.post('/cadastro/novo', (req, res) => {
    var erros = [];

    if(!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
        erros.push({texto: "Nome inválido!"});
    }

    if(!req.body.email || typeof req.body.email == undefined || req.body.email == null){
        erros.push({texto: "Email inválido!"});
    }

    if(!req.body.senha || typeof req.body.senha == undefined || req.body.senha == null){
        erros.push({texto: "Senha inválida!"});
    }

    if(req.body.senha.length < 5){
        erros.push({texto: "A senha precisa ter mais de 6 caracteres!"});
    }

    if(erros.length > 0){
        res.render("admin/cadastro", {erros: erros, })
    }else{
        const novoCadastro = {
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }
    
        new Cadastro(novoCadastro).save().then(() => {
            req.flash('success_msg', 'Usuário cadastrado com sucesso!');
            res.redirect('/admin');
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao cadastrar o usuário!');
            res.redirect('/erro');
        });
    }

});

module.exports = router;