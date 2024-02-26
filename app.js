const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
//!import modèles
const Members = require('./models/Members');
const Admins = require('./models/Admins');
const Events = require('./models/Events');
const Workshops = require('./models/Workshops');
const selectionsSchema = require('./models/Selections');
const Selections = require('./models/Selections');
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
app.post('/api/createmember', (req, res, next) => {
    const member = new Members({
        ...req.body
    });
    member.save()
        .then(() => res.status(201).json({ message: 'Le membre a bien ete cree' }))
        .catch(error => res.status(400).json({ error: error }));

});

app.delete('/api/deletemember/:id', (req, res, next) => {
    Members.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le membre a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));

});

app.put("/api/modifymember/:id", (req, res, next) => {
    Members.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Membre modifié !" }))
        .catch((error) => res.status(404).json({ error }))

});

app.patch("/api/modifymember/:id", (req, res, next) => {
    Members.updateOne({ _id: req.params.id },
        { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Membre modifié !" }))
        .catch((error) => res.status(404).json({ error }))

});

//*EVENTS//
app.post('/api/createvent', (req, res, next) => {
    const event = new Events({
        title: "Arkea Arena",
        date: "2022-01-01 22:00",
        place: "Bordeaux",
        description: "Concert de Lomepal",
        member: ["65ca0cfb4fbca96961e4aced", "65ca0ee18fefc4966d48d1fe"],

    });
    event.save()
        .then(() => res.status(201).json({ message: 'L\'evenement a bien ete cree' }))
        .catch(error => res.status(400).json({ error: error }));

});

app.put("/api/modifyevent/:id", (req, res, next) => {
    Events.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Evenement modifié !" }))
        .catch((error) => res.status(404).json({ error }));

});

app.patch("/api/modifyevent/:id", (req, res, next) => {
    Events.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Evenement modifié !" }))
        .catch((error) => res.status(404).json({ error }));

});

app.delete('/api/deleteevent/:id', (req, res, next) => {
    Events.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'L\'évenement a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));

});

//*WORKSHOPS//

app.post('/api/createworkshops', (req, res, next) => {
    const workshops = new Workshops({
        name: "Atelier de cuisine",
        coach: "William Bonnet",
        date: "2024-12-12 18:00",
        place: "Rennes",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac odio nec nunc tincidunt tincidunt",
        unsubscribe: false,
        grade: 10,
        member: ["65ca0cfb4fbca96961e4aced", "65ca0ee18fefc4966d48d1fe"],
    });
    workshops.save()
        .then(() => res.status(201).json({ message: 'L\'atelier a bien ete cree' }))
        .catch(error => res.status(400).json({ error: error }));

});

app.put("/api/modifyworkshops/:id", (req, res, next) => {
    Workshops.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Atelier modifié !" }))
        .catch((error) => res.status(404).json({ error }));

});

app.patch("/api/modifyworkshops/:id", (req, res, next) => {
    Workshops.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "L\'atelier modifié !" }))
        .catch((error) => res.status(404).json({ error }));

});

app.delete('/api/deleteworkshops/:id', (req, res, next) => {
    Workshops.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'L\'atelier a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));

});

//*Many-to-Many//

selectionsSchema.create({ member: ["65ca0ee18fefc4966d48d1fe", "65ca0cfb4fbca96961e4aced"], admin: Admins._id, isVolunteer: true, isSelected: false })

app.put("/api/modifyselections/:id", (req, res, next) => {
    Selections.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Selection modifié !" }))
        .catch((error) => res.status(404).json({ error }));
});

app.patch("/api/modifyselections/:id", (req, res, next) => {
    Selections.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Selection modifié !" }))
        .catch((error) => res.status(404).json({ error }));
});

app.delete('/api/deleteselections/:id', (req, res, next) => {
    Selections.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'La selection a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));

});



// selectionsSchema.find({ member: "65ca0cfb4fbca96961e4aced" }).populate("admin")


// selectionsSchema.find({ admin: Admins._id }).populate("member")




module.exports = app;