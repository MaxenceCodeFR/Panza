const Members = require('../models/Members.js');

exports.createMember = (req, res, next) => {
    const member = new Members({
        ...req.body
    });
    member.save()
        .then(() => res.status(201).json({ message: 'Membre cree !' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.deleteMember = (req, res, next) => {
    Members.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Membre supprime !' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.modifyMember = (req, res, next) => {
    Members.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Membre modifié !" }))
        .catch((error) => res.status(404).json({ error }))

};

exports.patchMember = (req, res, next) => {
    Members.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Membre modifié !" }))
        .catch((error) => res.status(404).json({ error }))

};


