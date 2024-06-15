const CarModel = require('../../models/CarModel');

module.exports = async (req, res)=>{

    const carToDelete = req.query.theCar;

    const car = await CarModel.findByIdAndDelete(carToDelete);

    console.log(`La voiture:"${car.idVoit}" a été bien supprimée.`);
        
    res.redirect('/voiture/0');
};