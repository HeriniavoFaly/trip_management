const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReservationSchema = new Schema({
    idVoit: {
        type: mongoose.Types.ObjectId,
        ref: 'Car',
        required: true
    },
    nomClient: {
        type: mongoose.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    numPlace: {
        type: Number,
        required: true
    },
    dateReservation: {
        type: Date,
        required: true,
        default: Date.now
    },
    dateVoyage: {
        type: Date,
        required: true
    },
    modeDePaie: {
        type: String,
        enum: {
            values: ["sans avance", "avec avance"],
            message: "Avec avance ou Sans avance seulement"
        }
    }
    ,
    avance: {
        type: Number,
        default: 0
    }

});

ReservationSchema.index({dateVoyage: 1, numPlace: 1}, {unique: true});

module.exports = mongoose.model('Reservation', ReservationSchema);
