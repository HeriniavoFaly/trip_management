const ClientModel = require('../../models/ClientModel');

module.exports = (req, res)=>{
    ClientModel.updateOne({_id: req.query.id}, req.body)
        .then(()=>{
            console.log("Modification avec succès.");
        })
        .catch((error)=>console.log(`On n'a pas pu modifier ce client:\n ${error}`));
        
        res.redirect('/client0');

};