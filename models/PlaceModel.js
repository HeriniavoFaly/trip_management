const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const onePlaceSchema = new Schema({
    numero: Number,
    occupation: {
        type: String,
        default: "non"
    }
});

const PlaceSchema = new Schema({
    idVoit: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    place:{
        type: [onePlaceSchema], // équivalent @ty iany io: [{numero: Number, occupation: String}]
        required: true
    },
    dateVoyage: {
        type: Date,
        // get: getDate,
        required: [true, "Veuillez informer la date prévue pour le voyage s'il vous plaît."],
        unique: true
    },
    destination:{
        type: String,
        required: [true, "Veuillez mettre la destination de ce voyage."]
    }
}); 

// function getDate(dateVoyage){

//     let dateV = new Date(dateVoyage.getTime());

//     return `${dateV.toLocaleString()}`;

// }

PlaceSchema.index({idVoit: 1, dateVoyage: 1}, {unique: true});

module.exports = mongoose.model('Place', PlaceSchema);