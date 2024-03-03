const Roles = require('../Models/Roles.js');

exports.createRole = (req, res, next) => {
    const role = new Roles({
        ...req.body
    });
    role.save()
        .then(() => res.status(201).json({ message: 'Role cree !' }))
        .catch(error => res.status(400).json({ error: error }));
};

exports.getOneRole = (req, res, next) => {
    Roles.findOne({ _id: req.params.id })
        .then(role => res.status(200).json(role))
        .catch(error => res.status(404).json({ error: error }));
};

exports.getAllRoles = (req, res, next) => {
    Roles.find()
        .then(roles => res.status(200).json(roles))
        .catch(error => res.status(400).json({ error: error }));
};