const Members = require('../models/Members.js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.createMember = (req, res, next) => {
    /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Créer un utiisateur',
            schema: { $ref: '#/definitions/Members' }
    } */
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

exports.getOneMember = (req, res, next) => {
    Members.findOne({ _id: req.params.id })
        .then(member => res.status(200).json(member))
        .catch(error => res.status(404).json({ error: error }));
};

exports.getAllMembers = (req, res, next) => {
    Members.find()
        .then(members => res.status(200).json(members))
        .catch(error => res.status(400).json({ error: error }));
};
exports.signUpMember = (req, res, next) => {
    bcrypt
        .hash(req.body.password, 10)
        .then((hash) => { // hashage du mot de passe
            const member = new Members({ // création d'un nouvel utilisateur
                email: req.body.email,
                firstname: req.body.firstname,
                name: req.body.name,
                password: hash,
            });
            member
                .save()
                .then(() => res.status(201).json({ message: "Membre créé !" })) // renvoi d'une réponse positive
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(500).json({ message: "sale pute" }));
};

exports.loginMember = (req, res, next) => {
    Members.findOne({ email: req.body.email }) // recherche de l'utilisateur dans la base de données
        .then((member) => {
            if (member === null) { // si l'utilisateur n'est pas trouvé 
                res.status(401).json({ message: "Paire login/mot de passe incorrecte" });   // renvoi d'une erreur
            } else {
                bcrypt // si l'utilisateur est trouvé, comparaison du mot de passe entré avec le hash enregistré dans la base de données
                    .compare(req.body.password, member.password)
                    .then((valid) => {
                        if (!valid) {
                            res.status(401).json({ message: "Paire login/mot de passe incorrecte" });
                        } else {
                            res.status(200).json({
                                memberId: member._id,
                                token: jwt.sign({ memberId: member._id }, "RANDOM_TOKEN_SECRET", { expiresIn: "24h" }),
                            });
                        }
                    })
                    .catch((error) => res.status(500).json({ error }));
            }
        })
        .catch((error) => res.status(500).json({ error }));
};


