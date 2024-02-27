const Workshops = require('../models/Workshops.js');
const Coaches = require('../models/Coaches.js');

exports.createWorkshops = (req, res, next) => {
    Coaches.findOne({ _id: req.body.idcoach })
        .then((coach) => {
            console.log(coach);
            const workshops = new Workshops({
                name: req.body.name,
                coach: coach,
            });
            workshops.save()
                .then(() => res.status(201).json({ message: 'L\'atelier a bien ete cree' }))
                .catch(error => res.status(400).json({ error: error }));
        })
};


exports.modifyWorkshops = (req, res, next) => {
    Workshops.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Atelier modifié !" }))
        .catch((error) => res.status(404).json({ error }));

};

exports.patchWorkshops = (req, res, next) => {
    Workshops.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "L\'atelier modifié !" }))
        .catch((error) => res.status(404).json({ error }));

};

exports.deleteWorkshops = (req, res, next) => {
    Workshops.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'L\'atelier a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));

};