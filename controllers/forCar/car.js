const CarModel =  require('../../models/CarModel');

module.exports = async (req, res)=>{

    let cars;

    cars = (req.params.isList == 1)?  await CarModel.find({}).sort({createdAt: 'desc'})
                                    : await CarModel.find({}).sort({createdAt: 'desc'}).limit(2);


    res.render('voiture',{
        cars
    });
};