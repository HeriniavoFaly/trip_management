const ClientModel = require('../../models/ClientModel');

module.exports = (req, res)=>{
    res.render('client',{
        Clients: req.Clients
    });
};