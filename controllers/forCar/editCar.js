const CarModel = require('../../models/CarModel');

module.exports = async (req, res)=>{
    const car_Id = req.query.id;
    const updates = req.body;

    const car = await CarModel.findByIdAndUpdate(car_Id, updates);

    console.log(`La voiture de numéro:"${car.idVoit}" a été bien modifiée.`);

    res.redirect('/voiture/0');
};