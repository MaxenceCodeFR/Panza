const Events = require('../models/Events.js');

exports.createEvent = (req, res, next) => {
    const event = new Events({
        ...req.body
    });
    event.save()
        .then(() => res.status(201).json({ message: 'L\'evenement a bien ete cree' }))
        .catch(error => res.status(400).json({ error: error }));

};

exports.modifyEvent = (req, res, next) => {
    Events.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Evenement modifié !" }))
        .catch((error) => res.status(404).json({ error }));

};

exports.patchEvent = (req, res, next) => {
    Events.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Evenement modifié !" }))
        .catch((error) => res.status(404).json({ error }));

};

exports.deleteEvent = (req, res, next) => {
    Events.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'L\'évenement a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));

};