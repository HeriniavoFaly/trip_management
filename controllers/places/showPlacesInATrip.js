module.exports = (req, res)=>{

    req.query.voiture = JSON.parse(req.query.voiture);
    req.query.place = JSON.parse(req.query.place);

    res.render('place', {
        infoTrip: req.query
    });
};