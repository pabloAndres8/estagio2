if(process.env.NODE_ENV == 'production'){
    module.exports = {mongoURI: "mongodb+srv://pablo33:<25120081200p@>@techphone.lpnwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"}
}else{
    module.exports = {mongoURI: "mongodb://localhost/techphone"}
}