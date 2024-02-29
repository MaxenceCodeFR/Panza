const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');





const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
});
const app = express()

app.use(express.json());
app.use(helmet());
app.use(mongoSanitize());
app.use(limiter);

//!import route
const membersRoutes = require('./Routes/Members.js');
const eventsRoutes = require('./Routes/Events.js');
const workshopsRoutes = require('./Routes/Workshops.js');
const selectionsRoutes = require('./Routes/Selections.js');
const rolesRoutes = require('./Routes/Roles.js');
const coachesRoutes = require('./Routes/Coaches.js');



//!connexion à la base de données
mongoose
    .connect("mongodb+srv://maxencehattabi:maxence@cluster0.qejtgrh.mongodb.net/panza?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    //!next() obligatoire ici
    next();
});

//*MEMBRES//
app.use('/api/members', membersRoutes);

//*EVENTS//
app.use('/api/events', eventsRoutes);

//*WORKSHOPS//
app.use('/api/workshops', workshopsRoutes);

//*SELECTIONS//
app.use('/api/selections', selectionsRoutes);

//*ROLES//
app.use('/api/roles', rolesRoutes);

//*COACHES//
app.use('/api/coaches', coachesRoutes);

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


module.exports = app;