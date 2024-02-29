const Workshops = require('../models/Workshops.js');

exports.createWorkshops = (req, res, next) => {
    const workshops = new Workshops({
        ...req.body
    });
    workshops.save()
        .then(() => res.status(201).json({ message: 'L\'atelier a bien ete cree' }))
        .catch(error => res.status(400).json({ error: error }));
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

exports.getOneWorkshops = (req, res, next) => {
    Workshops.findOne({ _id: req.params.id })
        .then(workshops => res.status(200).json(workshops))
        .catch(error => res.status(404).json({ error: error }));

};

exports.getAllWorkshops = (req, res, next) => {
    Workshops.find()
        .then(workshops => res.status(200).json(workshops))
        .catch(error => res.status(400).json({ error: error }));

};