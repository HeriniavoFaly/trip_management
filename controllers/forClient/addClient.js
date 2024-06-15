const ClientModel = require('../../models/ClientModel');

module.exports = (req, res) =>{
    const newClient = new ClientModel(req.body);

    newClient.save()
        .then((client)=>{
            console.log("Client bien enregistré: "+ client);
            res.redirect('/client0');
        })
        .catch((error) => console.log("On n'a pas pu créer ce client... Reessayer ultérieurement"));
};