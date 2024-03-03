const Events = require('../Models/Events.js');
const Selection = require('../Models/Selections.js'); // Assurez-vous que le chemin d'accès est correct
const Member = require('../Models/Members.js');

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

exports.getOneEvent = (req, res, next) => {
    Events.findOne({ _id: req.params.id })
        .then(event => res.status(200).json(event))
        .catch(error => res.status(404).json({ error: error }));

};

exports.getAllEvents = (req, res, next) => {
    Events.find()
        .then(events => res.status(200).json(events))
        .catch(error => res.status(400).json({ error: error }));

};

exports.addMember = (req, res, next) => {
    Events.updateOne({ _id: req.params.id }, { $push: { member: req.body.member } })
        .then(() => {
            return Member.updateOne({ _id: req.body.member }, { $inc: { presence: 1 } });
        })
        .then(() => {
            res.status(200).json({ message: "Membre ajouté et présence incrémentée !" });
        })
        .catch((error) => {
            res.status(404).json({ error });
        });
};
