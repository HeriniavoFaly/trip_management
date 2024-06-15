const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const clientSchema = new Schema({
    nom: {
        type: String,
        unique: true,
        required: [true, 'Le nom requis.']
    },
    numTel: {
        type: String,
        required: [true, 'numTel requis']
    },
    
    createdAt: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

module.exports = mongoose.model('Client',clientSchema);