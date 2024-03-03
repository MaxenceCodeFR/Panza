const Coaches = require('../Models/Coaches');

exports.createCoach = (req, res, next) => {
    const coach = new Coaches({
        ...req.body
    });
    coach.save()
        .then(() => res.status(201).json({ message: 'Le coach a bien ete cree' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.deleteCoach = (req, res, next) => {
    Coaches.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Le coach a bien ete supprime' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.getOneCoach = (req, res, next) => {
    Coaches.findOne({ _id: req.params.id })
        .then(coach => res.status(200).json(coach))
        .catch(error => res.status(404).json({ error: error }));
};

exports.getAllCoaches = (req, res, next) => {
    Coaches.find()
        .then(coaches => res.status(200).json(coaches))
        .catch(error => res.status(400).json({ error: error }));
};