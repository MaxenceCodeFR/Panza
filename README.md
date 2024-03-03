
## Panza

Panza est une application web de gestion pour une troupe de Thêatre. Elle permet de centraliser les activités de la troupe c'est a dire d'organiser les événements, les ateliers, pouvoir visualiser la présence de chaque membre, etc ...




## Technologies

**Langage:** Javascript

**Server:** Node.Js

**Framework:** Express

**Visualisation et test:** Postman & Swagger

**Dépendances et packages:**
- *Outil API:*
    - [Swagger](https://swagger.io/)
- *Base de donnée:*
    - [MongoDB](https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial)
- *Sécurité:*
    - [Helmet](https://expressjs.com/fr/advanced/best-practice-security.html)
    - [Rate Limit](https://www.npmjs.com/package/express-rate-limit)
    - [Bcrypt](https://www.npmjs.com/package/bcrypt)
    - [Mongo Sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
    - [Unique Validator](https://www.npmjs.com/package/mongoose-unique-validator)
    - [JWT](https://www.npmjs.com/package/express-jwt)


## Sur serveur local

Cloner le projet 

```bash
  git clone https://github.com/MaxenceCodeFR/Panza.git
```

Aller dans le dossier du projet

```bash
  cd panza
```

Installation des dépendances

```bash
  npm install
```

Démarrer le serveur
Nodemon étant installer vous pouvez effectuer :
```bash
    nodemon server
 ```
OU
```bash
  npm run start
```

Ensuite via Postman vous pouvez essayer différente route commençant par http://localhost:3000/api/exemple

Pour finir, Swagger est disponible sous l'URL :
http://localhost:3000/api-docs/

Swagger permet une visualisation plus claire. Chaque route est classée par nom et chaque table de la base de donnée est référencés


## Les auteurs

- [@Maxence Hattabi](https://www.github.com/MaxenceCodeFR)
- [@Julien Poirier](https://www.github.com/Julien-Po)


## Optimisations et version future

Pour une version 2, 3 et supérieure:
 - Pouvoir gerer les rôles
 - Ajouter des routes 
 - Selon la complexité de l'application, passer sur Serializer pour faciliter les realtions entre les entités

