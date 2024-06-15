const PlaceModel = require('../../models/PlaceModel');
const CarModel = require('../../models/CarModel');

module.exports = (req, res)=>{
    const infoTrip = req.body;

    CarModel.findOne({idVoit: req.body.idVoit})
        .then((car)=>{            
                const newTrip = new PlaceModel({
                    idVoit: car._id,
                    dateVoyage: infoTrip.dateVoyage,
                    destination: infoTrip.destination
                });
    
                for(i=0; i <= car.nbrPlace; i++){
                    newTrip.place.push({numero: i, occupation: 'non'});
                }
    
                newTrip.save()
                    .then(async (newTrip)=>{
                        console.log(`Voyage prévu bien enregistré`);
    
                        trip = await newTrip.populate('idVoit');
    
                        res.render('reserver', {trip: [trip], infoReservation: null});
                    });
            
        })
        .catch((error)=>{
            console.log(`On a rencontré un problème:${error}`);
            res.send("La voiture entrée n'existe pas");
        });

};