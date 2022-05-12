//Carregando módulos
const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const admin = require('./routes/admin');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const usuarios = require('./routes/usuarios');
const passport = require('passport');
require('./config/auth')(passport);
const db = require('./config/db');
const data = require('./data');

//Configurações
//Sessão
app.use(session({
    secret: "techphone",
    resave: true,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Middlewware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});

//Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//Handlebars
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Mongoose
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://techphone:25120081200pab@cluster0.j8qqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(() => {
    console.log('Conectado com o mongo!');
}).catch((err) => {
    console.log('Erro ao se conectar: ' + err);
});

//Public
app.use(express.static(path.join(__dirname,"public")));

app.use((req, res, next) => {
    //console.log('Middleware!');
    next();
});

//Rotas
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/teste', (req, res) => {
    res.render('teste');
});
app.get('/filtrar', (req, res) => {
    res.render('filtrar');
});




app.use('/usuarios', usuarios);

app.use('/admin', admin);

//Outros
let valid;
app.use('/filtro', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
        if(isValid){
            if(req.query.city == 'Chicago' || req.query.age == 106){
                res.render('home');
            }
            if(req.query.city == 'Metropolis' || req.query.age == 21){
                res.render('index');
            }
        }

      }
      return isValid;
    });
    //res.send(filteredUsers);

  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`);
})
