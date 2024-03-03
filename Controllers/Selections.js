const Selections = require('../Models/Selections');


exports.createSelections = (req, res, next) => {
    const selections = new Selections({
        ...req.body
    });
    selections.save()
        .then(() => res.status(201).json({ message: 'Selection cree !' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.deleteSelections = (req, res, next) => {
    Selections.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Selection supprime !' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.modifySelections = (req, res, next) => {
    Selections.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Selection modifié !" }))
        .catch((error) => res.status(404).json({ error }))

};

exports.patchSelections = (req, res, next) => {
    Selections.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
        .then(() => res.status(200).json({ message: "Selection modifié !" }))
        .catch((error) => res.status(404).json({ error }))

};

exports.getOneSelections = (req, res, next) => {
    Selections.findOne({ _id: req.params.id })
        .then(selections => res.status(200).json(selections))
        .catch(error => res.status(404).json({ error: error }));
};

exports.getAllSelections = (req, res, next) => {
    Selections.find()
        .then(selections => res.status(200).json(selections))
        .catch(error => res.status(400).json({ error: error }));
};

