const ClientModel = require('../../models/ClientModel');

module.exports = (req, res) =>{

    const clientNameToDel = req.query.nom;

    ClientModel.deleteOne({nom: clientNameToDel})
        .then(()=>{
            console.log(`Le client nommé ${clientNameToDel} a été bien supprimé.`);
        })
        .catch((error)=>{
            console.log(`${error}\n`);
            console.log(`On n'a pas pu supprimer le client nommé ${clientNameToDel}`);
        });
        
        res.redirect('/client0');

};