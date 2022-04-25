const axios = require('axios');

class CityController{
    static async getAllCities(req, res){
        const query = req.query.uf;
        const name = req.query.name;
        const state = req.query.state;
        const region = req.query.region;


        const cities = [];

            const { data } = await axios('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
    

        data.forEach(city => {
            cities.push({
                    id: city.id,
                    name: city.nome,
                    state: city.microrregiao.mesorregiao.UF.nome,
                    uf: city.microrregiao.mesorregiao.UF.sigla,
                    region: city.microrregiao.mesorregiao.UF.regiao.nome,
            })
        });
        async function check(){
            const UpperCase = (upper) => {
                return !/[a-z]/.test(upper) && /[A-Z]/.test(upper);
            }
            if(query != null ){
                if(query.length !== 2){
                    res.status(400).json({message: 'the uf field must have only two letters'});
                }
                else if(!UpperCase(query)){
                    res.status(400).json({message: 'invalid uf field, its value must be upper case'});
                }   
                else{
                    res.status(200).json(cities.filter(city => city.uf === query));
                } 
           }
            else if(name != null){
                res.status(200).json(cities.filter(city => city.name === name))
            }   
           else if(state != null){
            res.status(200).json(cities.filter(city => city.state === state));
           }
           else if(region != null){
            res.status(200).json(cities.filter(city => city.region === region));
           }
           else{
               res.status(200).json(cities);
           }
        }

        check();
   
        
    }


}

module.exports = CityController;