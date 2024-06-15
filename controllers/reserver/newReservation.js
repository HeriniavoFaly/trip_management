const PlaceModel = require('../../models/PlaceModel');
const ReservationModel = require('../../models/ReservationModel');
const ClientModel = require('../../models/ClientModel');
const moment = require('moment');

module.exports = (req, res) =>{
    const infoReservation = req.body;
    const numPlace = parseInt(infoReservation.plcRES);

    PlaceModel.findById(infoReservation.idP)
    .then(async (place)=>{       
        const client = await ClientModel.findOne({nom: infoReservation.nomClient});

        if(client){
            let reservation = new ReservationModel({
                idVoit: infoReservation.idV_Object,
                nomClient: client._id,
                numPlace: numPlace,
                dateVoyage: infoReservation.dateV,
                modeDePaie: infoReservation.paymt,
                avance: parseInt(infoReservation.avance)
            });

            place.place[numPlace].occupation = "oui";
            await place.save();

            return reservation.save()
            .then(async (newReserv)=>{
                console.log(`Reservation enregistrée:${newReserv}`);

                const reserv = await newReserv.populate(['idVoit', 'nomClient']);

                console.log(`Reservation populated: \n ${reserv}`);

                res.json({success: true, message: 'Reservation enregistrée'});
            });
        }
        else
        {
            res.status(404).json({success: false, message: 'Client non trouvé'});
        }
    })
    .catch((error)=>{
        if(error.code === 11000)
        {
            res.status(409).json({success: false, message: 'Place déjà reservé.'});      
        }
        else{
            console.log("Error: "+ error);
            res.status(500).json({success: false, message: 'Erreur serveur'});
        }
    });
};