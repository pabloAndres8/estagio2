if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: "mongodb+srv://techphone:25120081200pab@cluster0.j8qqd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/techphone"}
}