const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            res.status(401).json({ message: "Pas de jetons d'authentification fourni" });
        } else {
            // On split le token car il est composé de Bearer avant
            const token = req.headers.authorization.split(" ")[1];
            const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
            const memberId = decodedToken.memberId;
            const isAdmin = decodedToken.isAdmin; // Vérification de la revendication d'administrateur

            if (isAdmin) {
                // l'objet req/request est transmis aux routes qui vont être appelées
                // on va donc créer un objet ici auth avec comme info l'id
                req.auth = {
                    memberId: memberId,
                    isAdmin: isAdmin // Ajout de la revendication isAdmin à l'objet req.auth
                };
                // Si tout va bien, on passe au code suivant avec next
                next();
            } else {
                // Si l'utilisateur n'est pas un administrateur, renvoyer une erreur 403 (Accès refusé)
                res.status(403).json({ message: "Vous n'êtes pas autorisé à accéder à cette ressource" });
            }
        }
    } catch (error) {
        res.status(401).json({ error });
    }
};
