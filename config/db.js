if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: "mongodb+srv://pablo:25120081200p@@cluster0.9fspo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/techphone"}
}