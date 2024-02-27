const Roles = require('../models/Roles.js');

exports.createRole = (req, res, next) => {
    const role = new Roles({
        ...req.body
    });
    role.save()
        .then(() => res.status(201).json({ message: 'Role cree !' }))
        .catch(error => res.status(400).json({ error: error }));
};