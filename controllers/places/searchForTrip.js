const PlaceModel = require('../../models/PlaceModel');

module.exports = (req, res)=>{
    const infoTrip = req.body;

    const dateVoyage =  new Date(infoTrip.dateVoyage);

    PlaceModel.find({
        dateVoyage: {$gt: dateVoyage, $lt: new Date(dateVoyage.valueOf() + 24*3600*1000)}, /* Natao 0tr'zao lery satria datetime
        no stocké @BD nefa refa manao recherche de date iany ho hazakoa avy any @req de lasa construction-na data tsy misy time,
        de io condition io @zay hi-assurer-na an'azy hoe retourner-ny aby ze date mitovy @io entre an'io 24h io*/
        destination: infoTrip.destination

    })
    .populate('idVoit')
    .then((trip)=>{
        console.log(`Voyage trouvé`);
    

        res.render('reserver', {
            trip,
            infoReservation: null
        });
    })
    .catch((error)=>{
        console.log(`Un erreur est survenu: ${error}`);
    });   
};