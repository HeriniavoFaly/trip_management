const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarSchema = new Schema({
    idVoit: {
        type: String,
        unique: true,
        required: [true, "Veuillez renseigner le numéro de la voiture"]
    },
    design: String,
    type: {
        type: String,
        enum: {
            values: ['simple', 'premium', 'VIP'],
            message: `Seuls les types:"simple, premium, VIP" sont supportés.`
        }

    },
    nbrPlace: {
        type: Number,
        default: 19
    },
    frais: Number,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('Car', CarSchema);