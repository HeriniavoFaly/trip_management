const ClientModel = require('../../models/ClientModel');
let Clients = {};

module.exports = async (req, res)=>{
    if(req.params.isList == 0){
        Clients = await ClientModel.find({}).sort({createdAt: 'desc'}).limit(5);
    }
    else{
        Clients = await ClientModel.find({});
    }

    res.render('client', {
        Clients
    });
};