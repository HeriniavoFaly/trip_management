const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ReservationModel = require('./models/ReservationModel');

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/static', express.static(path.resolve(__dirname+'/public')));
app.set('view engine', 'ejs');

/*---------------------------- Connection to MongoDB -----------------------------------------------*/

mongoose.connect('mongodb://127.0.0.1:27017/Gestion_resVoiture')
.then(()=>{
    console.log('Connecté à la base de donnée');
    return ReservationModel.init();
})
.catch((error)=>{
    console.log("On n'a pas pu se connecter à la base de données");
}); 

/* -----------------------------CONTROLLERS --------------------------------------------------------- */

/* Client */
const addClient = require('./controllers/forClient/addClient');
const showClient = require('./controllers/forClient/client');
const delClient = require('./controllers/forClient/delClient');
const editClient = require('./controllers/forClient/editClient');
const searchClient = require('./controllers/forClient/searchClient');

/* Voiture */
const showCar =  require('./controllers/forCar/car');
const addCar = require('./controllers/forCar/addCar');
const searchCar = require('./controllers/forCar/searchCar');
const deleteCar =  require('./controllers/forCar/deleteCar');
const editCar = require('./controllers/forCar/editCar');

/* place */
const addPlacesForNewTrip = require('./controllers/places/addPlacesForNewTrip');
const searchForTrip = require('./controllers/places/searchForTrip');
const showPlacesInATrip = require('./controllers/places/showPlacesInATrip');

/* reservation */
const reserver = require('./controllers/reserver/reserver');
const occuperPlace = require('./controllers/reserver/newReservation');

/*----------------------------------------- MIDDLEWARES -------------------------------------------- */
const findClientMiddleware = require('./controllers/middlewares/findClient');

/* -------------------------------------------------------------------------------------------------- */

app.get('/', (req, res)=>{
    res.render('menu');
});

/* -------------------------- Routes for Client requests ---------------------------- */
app.get('/client:isList', showClient);
app.get('/client/delete', delClient);
app.post('/client/search', findClientMiddleware, searchClient);
app.post('/client/edit', editClient);

/*---------------------------- Routes for requests on Cars--------------------------- */

app.get('/voiture/delete', deleteCar);
app.get('/voiture/:isList', showCar);
app.post('/voiture/new', addCar);
app.post('/voiture/search', searchCar);
app.post('/voiture/edit', editCar);

/* ----- Routes for requests on new Trip( equiv new places for a specific date ) ------ */

app.post('/voyage/new', addPlacesForNewTrip);
app.post('/voyage/search', searchForTrip);

/* --------------------------------------------- */

app.get('/place/show', showPlacesInATrip);

app.get('/reserver', reserver);
app.post('/reserver/new', occuperPlace);

app.post('/client/new', addClient);

app.listen(3000, ()=>console.log("Server listenning..."));