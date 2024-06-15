const CarModel = require('../../models/CarModel');

module.exports = async (req, res)=>{
    const searchWord = req.body.idVoit;
  
    const cars = await CarModel.find({idVoit: new RegExp(searchWord, 'i')});

    res.render('voiture',{
        cars
    });
};