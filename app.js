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
const { timeLog, timeStamp } = require('console');
const res = require('express/lib/response');

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
app.get('/noticia', (req, res) => {
    res.render('noticia');
}); 
app.get('/noticia_2', (req, res) => {
    res.render('noticia_2');
}); 
app.get('/noticia_3', (req, res) => {
    res.render('noticia_3');
}); 
app.get('/noticia_4', (req, res) => {
    res.render('noticia_4');
}); 
app.get('/noticia_5', (req, res) => {
    res.render('noticia_5');
}); 
app.get('/noticia_6', (req, res) => {
    res.render('noticia_6');
}); 
app.get('/noticia_7', (req, res) => {
    res.render('noticia_7');
}); 
app.get('/noticia_8', (req, res) => {
    res.render('noticia_8');
}); 
app.get('/noticia_9', (req, res) => {
    res.render('noticia_9');
}); 
app.get('/noticia_10', (req, res) => {
    res.render('noticia_10');
}); 
app.get('/filtrar01', (req, res) => {
    res.render('filtrar01');
});
app.get('/filtrar02', (req, res) => {
    res.render('filtrar02');
});
app.get('/filtrar03', (req, res) => {
    res.render('filtrar03');
});
app.get('/filtrar04', (req, res) => {
    res.render('filtrar04');
});
app.get('/filtrar05', (req, res) => {
    res.render('filtrar05');
});
app.get('/filtrar06', (req, res) => {
    res.render('filtrar06');
});
app.get('/filtrar07', (req, res) => {
    res.render('filtrar07');
});
app.get('/filtrar08', (req, res) => {
    res.render('filtrar08');
});
app.get('/filtrar09', (req, res) => {
    res.render('filtrar09');
});
app.get('/filtrar10', (req, res) => {
    res.render('filtrar10');
});
app.get('/filtrar11', (req, res) => {
    res.render('filtrar11');
});
app.get('/filtrar12', (req, res) => {
    res.render('filtrar12');
});
app.get('/filtrar13', (req, res) => {
    res.render('filtrar13');
});
app.get('/filtrar14', (req, res) => {
    res.render('filtrar14');
});
app.get('/filtrar15', (req, res) => {
    res.render('filtrar15');
});
app.get('/filtrar16', (req, res) => {
    res.render('filtrar16');
});
app.get('/filtrar17', (req, res) => {
    res.render('filtrar17');
});
app.get('/filtrar18', (req, res) => {
    res.render('filtrar18');
});
app.get('/filtrar19', (req, res) => {
    res.render('filtrar19');
});
app.get('/filtrar20', (req, res) => {
    res.render('filtrar20');
});
app.get('/filtrar21', (req, res) => {
    res.render('filtrar21');
});
app.get('/filtrar22', (req, res) => {
    res.render('filtrar22');
});
app.get('/filtrar23', (req, res) => {
    res.render('filtrar23');
});
app.get('/filtrar24', (req, res) => {
    res.render('filtrar24');
});
app.get('/filtrar25', (req, res) => {
    res.render('filtrar25');
});
app.get('/filtrar26', (req, res) => {
    res.render('filtrar26');
});
app.get('/filtrar27', (req, res) => {
    res.render('filtrar27');
});
app.get('/filtrar28', (req, res) => {
    res.render('filtrar28');
});
app.get('/filtrar29', (req, res) => {
    res.render('filtrar29');
});
app.get('/filtrar30', (req, res) => {
    res.render('filtrar30');
});
app.get('/filtrar31', (req, res) => {
    res.render('filtrar31');
});
app.get('/filtrar32', (req, res) => {
    res.render('filtrar32');
});
app.get('/filtrar33', (req, res) => {
    res.render('filtrar33');
});
app.get('/filtrar34', (req, res) => {
    res.render('filtrar34');
});
app.get('/filtrar35', (req, res) => {
    res.render('filtrar35');
});
app.get('/filtrar36', (req, res) => {
    res.render('filtrar36');
});
app.get('/filtrar37', (req, res) => {
    res.render('filtrar37');
});
app.get('/filtrar38', (req, res) => {
    res.render('filtrar38');
});
app.get('/filtrar39', (req, res) => {
    res.render('filtrar39');
});
app.get('/filtrar40', (req, res) => {
    res.render('filtrar40');
});
app.get('/testando', (req, res) => {
    res.render('testando');
});
app.get('/erro', (req, res) => {
    res.render('erropagina');
});



app.use('/usuarios', usuarios);

app.use('/admin', admin);

//Outros
let valido;
app.use('/filtro', (req, res, next) => {
    const filters = req.query;
    const filteredUsers = data.filter(user => {
      let isValid = true;
      for (key in filters) {
        console.log(key, user[key], filters[key]);
        isValid = isValid && user[key] == filters[key];
        if(isValid){
            
           
           
        }
        
      }
   
      return isValid;
    });
   //res.send(filteredUsers);
 
  
    if(req.query.armazenamento == '16GB' && req.query.ram == '128MB' && req.query.processador == "ARM 11" && req.query.tela == "TFT LCD"){
        res.render('teste');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '128MB' && req.query.processador == "ARM 11" && req.query.tela == "TFT LCD"){
        res.render('teste');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '256MB' && req.query.processador == "ARM Cortex A8" && req.query.tela == "TFT LCD"){
        res.render('filtrar01');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '512MB' && req.query.processador == "ARM Apple A4" && req.query.tela == "TFT LCD"){
        res.render('filtrar02');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '512MB' && req.query.processador == "Apple A5" && req.query.tela == "IPS LCD"){
        res.render('filtrar03');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '1GB' && req.query.processador == "Apple A6" && req.query.tela == "IPS LCD"){
        res.render('filtrar04');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '1GB' && req.query.processador == "Cyclone Apple A7" && req.query.tela == "IPS LCD"){
        res.render('filtrar05');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Apple A6" && req.query.tela == "IPS LCD"){
        res.render('filtrar06');
    }
    if(req.query.armazenamento == '128GB' && req.query.ram == '1GB' && req.query.processador == "Apple A8" && req.query.tela == "IPS LCD"){
        res.render('filtrar07');
    }
    if(req.query.armazenamento == '128GB' && req.query.ram == '2GB' && req.query.processador == "Apple A9" && req.query.tela == "IPS LCD"){
        res.render('filtrar08');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '2GB' && req.query.processador == "Twister Apple A9" && req.query.tela == "IPS LCD"){
        res.render('filtrar09');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '2GB' && req.query.processador == "Apple A10 Fusion" && req.query.tela == "IPS LCD"){
        res.render('filtrar10');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '3GB' && req.query.processador == "Quad Core Apple A10 Fusion" && req.query.tela == "IPS LCD"){
        res.render('filtrar11');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '2GB' && req.query.processador == "Apple A11 Bionic" && req.query.tela == "IPS LCD"){
        res.render('filtrar12');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '3GB' && req.query.processador == "Apple A11 Bionic" && req.query.tela == "IPS LCD"){
        res.render('filtrar13');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '3GB' && req.query.processador == "Apple A11 Bionic" && req.query.tela == "OLED"){
        res.render('filtrar14');
    }
    if(req.query.armazenamento == '512GB' && req.query.ram == '4GB' && req.query.processador == "Apple A12 Bionic" && req.query.tela == "OLED"){
        res.render('filtrar15');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '3GB' && req.query.processador == "Apple A12 Bionic" && req.query.tela == "IPS LCD"){
        res.render('filtrar16');
    }
    if(req.query.armazenamento == '512GB' && req.query.ram == '4GB' && req.query.processador == "Apple A13 Bionic" && req.query.tela == "LCD"){
        res.render('filtrar17');
    }
    if(req.query.armazenamento == '512GB' && req.query.ram == '4GB' && req.query.processador == "Apple A13 Bionic" && req.query.tela == "OLED"){
        res.render('filtrar18');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '3GB' && req.query.processador == "Apple A13 Bionic" && req.query.tela == "IPS LCD"){
        res.render('filtrar19');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '4GB' && req.query.processador == "Apple A14 Bionic" && req.query.tela == "Super Retina XDR OLED"){
        res.render('filtrar20');
    }
    if(req.query.armazenamento == '512GB' && req.query.ram == '6GB' && req.query.processador == "Apple A14 Bionic" && req.query.tela == "Super Retina XDR OLED"){
        res.render('filtrar21');
    }
    if(req.query.armazenamento == '512GB' && req.query.ram == '4GB' && req.query.processador == "Apple A15 Bionic" && req.query.tela == "Super Retina XDR OLED"){
        res.render('filtrar22');
    }
    if(req.query.armazenamento == '1000GB' && req.query.ram == '6GB' && req.query.processador == "Apple A15 Bionic" && req.query.tela == "Super Retina XDR OLED"){
        res.render('filtrar23');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '3GB' && req.query.processador == "Apple A15 Bionic" && req.query.tela == "Retina IPS LCD"){
        res.render('filtrar24');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '512MB' && req.query.processador == "Cortex A8 ARM Hummingbird" && req.query.tela == "Super AMOLED"){
        res.render('filtrar25');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "ARM Cortex A9" && req.query.tela == "Super AMOLED Plus"){
        res.render('filtrar26');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '478MB' && req.query.processador == "Cortex A8" && req.query.tela == "Super Clear LCD"){
        res.render('filtrar27');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "NVDIA Tegra 2 AP20H Dual Core" && req.query.tela == "Super Clear LCD"){
        res.render('filtrar28');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '512MB' && req.query.processador == "Cortex A8 SAMSUNG Hummingbird" && req.query.tela == "Super AMOLED"){
        res.render('filtrar29');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "SAMSUNG" && req.query.tela == "Super AMOLED Plus"){
        res.render('filtrar30');
    }
    if(req.query.armazenamento == '160MB' && req.query.ram == '290MB' && req.query.processador == "Broadcom BCM21553" && req.query.tela == "TFT LCD"){
        res.render('filtrar31');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A9 Texas Instruments OMAP 4460" && req.query.tela == "Super AMOLED"){
        res.render('filtrar32');
    }
    if(req.query.armazenamento == '512MB' && req.query.ram == '290MB' && req.query.processador == "Broadcom BCM21553" && req.query.tela == "TFT LCD"){
        res.render('filtrar33');
    }
    if(req.query.armazenamento == '2GB' && req.query.ram == '512MB' && req.query.processador == "Snapdragon Qualcomm MSM8255T" && req.query.tela == "TFT LCD"){
        res.render('filtrar34');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '768MB' && req.query.processador == "SAMSUNG" && req.query.tela == "PLS LCD"){
        res.render('filtrar35');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '512MB' && req.query.processador == "Qualcomm MSM7227" && req.query.tela == "TFT LCD"){
        res.render('filtrar36');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '768MB' && req.query.processador == "ARM Cortex A9" && req.query.tela == "TFT LCD"){
        res.render('filtrar37');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "SAMSUNG Exynos 4412" && req.query.tela == "Super AMOLED"){
        res.render('filtrar38');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '768MB' && req.query.processador == "SAMSUNG" && req.query.tela == "Super AMOLED"){
        res.render('filtrar39');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '768MB' && req.query.processador == "Snapdragon Qualcomm MSM7227A" && req.query.tela == "TFT LCD"){
        res.render('filtrar40');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '2GB' && req.query.processador == "Cortex-A9 SAMSUNG Exynos 4412" && req.query.tela == "Super AMOLED"){
        res.render('filtrar41');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "Texas Instruments OMAP4460" && req.query.tela == "Super AMOLED"){
        res.render('filtrar42');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '512MB' && req.query.processador == "A9" && req.query.tela == "TFT LCD"){
        res.render('filtrar43');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "NovaThor U8420" && req.query.tela == "Super AMOLED"){
        res.render('filtrar44');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "Texas Instruments OMAP 4470" && req.query.tela == "Super AMOLED"){
        res.render('filtrar45');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A9 Broadcom BCM28155" && req.query.tela == "TFT LCD"){
        res.render('filtrar46');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "ARM Cortex A9" && req.query.tela == "Super AMOLED Plus"){
        res.render('filtrar47');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A9 ST Ericsson NovaThor U8500" && req.query.tela == "TFT LCD"){
        res.render('filtrar48');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '768MB' && req.query.processador == "Cortex A5 Qualcomm Snapdragon MSM7227A" && req.query.tela == "TFT LCD"){
        res.render('filtrar49');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '2GB' && req.query.processador == "SAMSUNG Exynos 5 Octa 5410" && req.query.tela == "Super AMOLED"){
        res.render('filtrar50');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1.5GB' && req.query.processador == "Snapdragon 400 Qualcomm MSM8930" && req.query.tela == "Super AMOLED"){
        res.render('filtrar51');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Snapdragon 200 Qualcomm MSM8225Q" && req.query.tela == "TFT LCD"){
        res.render('filtrar52');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '2GB' && req.query.processador == "Snapdragon 600 Qualcomm APQ8064T" && req.query.tela == "Super AMOLED"){
        res.render('filtrar53');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '2GB' && req.query.processador == "Snapdragon 600 Qualcomm APQ8064T" && req.query.tela == "TFT LCD"){
        res.render('filtrar54');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1.5GB' && req.query.processador == "Cortex-A9 SAMSUNG Exynos 4212" && req.query.tela == "Super AMOLED"){
        res.render('filtrar55');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '3GB' && req.query.processador == "Snapdragon 800 Qualcomm MSM8974" && req.query.tela == "Super AMOLED"){
        res.render('filtrar56');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '512MB' && req.query.processador == "Snapdragon Qualcomm MSM8255T" && req.query.tela == "Super AMOLED"){
        res.render('filtrar57');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1.5GB' && req.query.processador == "Cortex-A7 Qualcomm Snapdragon 400 MSM8226" && req.query.tela == "TFT LCD"){
        res.render('filtrar58');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '768MB' && req.query.processador == "Cortex-A9" && req.query.tela == "TFT LCD"){
        res.render('filtrar59');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '3GB' && req.query.processador == "Snapdragon 800 Qualcomm MSM8974" && req.query.tela == "Super AMOLED"){
        res.render('filtrar60');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A7 Broadcom BCM23550" && req.query.tela == "TFT LCD"){
        res.render('filtrar61');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '2GB' && req.query.processador == "Cortex-A7 Qualcomm MSM8228" && req.query.tela == "Super AMOLED"){
        res.render('filtrar62');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '512MB' && req.query.processador == "Snapdragon Qualcomm MSM7225A" && req.query.tela == "TFT LCD"){
        res.render('filtrar63');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A9" && req.query.tela == "TFT LCD"){
        res.render('filtrar64');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '2GB' && req.query.processador == "Krait 400 Qualcomm Snapdragon 801" && req.query.tela == "Super AMOLED"){
        res.render('filtrar65');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A9 Marvell PXA988" && req.query.tela == "Super AMOLED"){
        res.render('filtrar66');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '512MB' && req.query.processador == "Cortex-A9 Broadcom BCM21664T" && req.query.tela == "TFT LCD"){
        res.render('filtrar67');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1.5GB' && req.query.processador == "Cortex-A7 Qualcomm Snapdragon 400" && req.query.tela == "Super AMOLED"){
        res.render('filtrar68');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '3GB' && req.query.processador == "Cortex A53 / Cortex A57 SAMSUNG Exynos 5433" && req.query.tela == "Super AMOLED"){
        res.render('filtrar69');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A53 Qualcomm Snapdragon 410 MSM8916" && req.query.tela == "Super AMOLED"){
        res.render('filtrar70');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1.5GB' && req.query.processador == "Cortex-A7 SAMSUNG Exynos 3 Quad 3470" && req.query.tela == "Super AMOLED"){
        res.render('filtrar71');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '512MB' && req.query.processador == "Cortex-A7 Spreadtrum SC6815A" && req.query.tela == "TFT LCD"){
        res.render('filtrar72');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '2GB' && req.query.processador == "Cortex-A53 SAMSUNG Exynos 7580" && req.query.tela == "Super AMOLED"){
        res.render('filtrar73');
    }
    if(req.query.armazenamento == '4GB' && req.query.ram == '512MB' && req.query.processador == "Cortex-A7 Spreadtrum Dolphin SC7715" && req.query.tela == "TFT LCD"){
        res.render('filtrar74');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '2GB' && req.query.processador == "Cortex A15 / Cortex A7 SAMSUNG Exynos 5 Octa 5430" && req.query.tela == "Super AMOLED"){
        res.render('filtrar75');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1.5GB' && req.query.processador == "Snapdragon 410 Qualcomm Cortex-A53" && req.query.tela == "LCD"){
        res.render('filtrar76');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '3GB' && req.query.processador == "Qualcomm Snapdragon 805 APQ8084" && req.query.tela == "Super AMOLED"){
        res.render('filtrar77');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '2GB' && req.query.processador == "Cortex-A53 Qualcomm Snapdragon 410" && req.query.tela == "Super AMOLED"){
        res.render('filtrar78');
    }
    if(req.query.armazenamento == '16GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A53 Qualcomm Snapdragon 410" && req.query.tela == "Super AMOLED"){
        res.render('filtrar79');
    }
    if(req.query.armazenamento == '8GB' && req.query.ram == '1GB' && req.query.processador == "Cortex-A53 Qualcomm Snapdragon 410 MSM8916" && req.query.tela == "TFT LCD"){
        res.render('filtrar80');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '4GB' && req.query.processador == "SAMSUNG Exynos 7 Octa 9610" && req.query.tela == "Super AMOLED"){
        res.render('filtrar81');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '3GB' && req.query.processador == "SAMSUNG Exynos 7 Octa 7884" && req.query.tela == "Super AMOLED"){
        res.render('filtrar82');
    }
   if(req.query.armazenamento == '128GB' && req.query.ram == '6GB' && req.query.processador == "Snapdragon 675 Qualcomm SDM675" && req.query.tela == "Super AMOLED"){
    res.render('filtrar83');
    }   
    if(req.query.armazenamento == '64GB' && req.query.ram == '6GB' && req.query.processador == "Snapdragon 845 Qualcomm SDM845" && req.query.tela == "AMOLED"){
        res.render('filtrar84');
    } 
    if(req.query.armazenamento == '128GB' && req.query.ram == '8GB' && req.query.processador == "Snapdragon 855 Plus Qualcomm SDM855" && req.query.tela == "AMOLED"){
        res.render('filtrar85');
    }
    if(req.query.armazenamento == '128GB' && req.query.ram == '8GB' && req.query.processador == "Snapdragon 855 Plus Qualcomm SDM855" && req.query.tela == "Super AMOLED"){
        res.render('filtrar86');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '8GB' && req.query.processador == "Snapdragon 865 Qualcomm SDM865" && req.query.tela == "Super AMOLED"){
        res.render('filtrar87');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '12GB' && req.query.processador == "Snapdragon 888 Qualcomm SM8350" && req.query.tela == "AMOLED"){
        res.render('filtrar88');
    }
    if(req.query.armazenamento == '256GB' && req.query.ram == '12GB' && req.query.processador == "Snapdragon 888 Qualcomm SM8350" && req.query.tela == "OLED"){
        res.render('filtrar89');
    }
    if(req.query.armazenamento == '64GB' && req.query.ram == '3GB' && req.query.processador == "Helio P22 MediaTek MT6762" && req.query.tela == "IPS LCD"){
        res.render('filtrar90');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '3GB' && req.query.processador == "Helio P22 MediaTek MT6762" && req.query.tela == "IPS LCD"){
        res.render('filtrar91');
    }
    if(req.query.armazenamento == '128GB' && req.query.ram == '8GB' && req.query.processador == "Snapdragon 865 Qualcomm SDM865" && req.query.tela == "OLED"){
        res.render('filtrar92');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '2GB' && req.query.processador == "Snapdragon 215 Qualcomm QM215" && req.query.tela == "LCD"){
        res.render('filtrar93');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '2GB' && req.query.processador == "Snapdragon Qualcomm SDM430" && req.query.tela == "IPS LCD"){
        res.render('filtrar94');
    }
    if(req.query.armazenamento == '32GB' && req.query.ram == '3GB' && req.query.processador == "Snapdragon 450 Qualcomm SDM450" && req.query.tela == "IPS LCD"){
        res.render('filtrar95');
    }
    else if(req.query.armazenamento  && req.query.ram  && req.query.processador  && req.query.tela ){
        res.render('erropagina');
    }
    
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor conectado na porta ${PORT}`);
})
