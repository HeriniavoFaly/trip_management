module.exports = (req, res)=>{
    const infoReservation = (req.query.infoReservation == null)? null : JSON.parse(req.query.infoReservation);

    console.log(infoReservation);
    
    res.render('reserver',{
        trip: [],
        infoReservation: infoReservation
    });
};