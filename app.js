const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
mongoose
    .connect("mongodb+srv://maxencehattabi:maxence@cluster0.qejtgrh.mongodb.net/panza?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Connexion à MongoDB réussie !"))
    .catch(() => console.log("Connexion à MongoDB échouée !"))





module.exports = app;