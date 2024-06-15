const ClientModel = require('../../models/ClientModel');

module.exports = (req, res, next) =>{
    ClientModel.find({
        $or: [
            {
                nom: new RegExp(`${req.body.searchWord}`,'i')
            },
            {
                numTel: req.body.searchWord
            }

        ]
    }).then((Clients)=>{
        if(Clients.length <= 0)
        {
            if(req.body.idV != null)
            {
                const newClient = new ClientModel({
                    nom: req.body.nameClient
                });
            }
            else
            {
                return res.status(404).json({"error": "Client not Found"});
            }
        }
        else
        {
            console.log("found");
            req.Clients = Clients;
            next();
        }
        
    }).catch((error)=>{
            res.status(500).send(`Error server. Try after a few moment. Error: ${error}`);   
    });
};