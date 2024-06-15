const carModel = require('../../models/CarModel');

module.exports = (req, res)=>{
    const newCar = new carModel(req.body);

    newCar.save()
        .then((car)=>{
            console.log("Voiture ajoutée dans la base de données.");
             res.redirect('/voiture/0');
        })
        .catch((error)=>console.log(`On n' a pas pu enregistrer la voiture: ${error}`));

};