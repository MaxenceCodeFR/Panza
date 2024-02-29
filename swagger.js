const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'My API',
        description: 'Description'
    },
    host: 'localhost:3000',
    definitions: {
        Members: {
            firstname: 'Francis',
            name: 'Prévost',
            photo: 'https://picsum.photos/200/200',
            email: 'francis.prevost@gmail.com',
            password: 'password',
            presence: 1,
            role: '60d1f5f5c1b6e3c8e8d9c7e3'
        },
        Events: {
            title: 'Soirée Son et Lumière',
            date: '2021-06-23',
            place: 'Place de la Mairie',
            description: 'Soirée de présentation des activités de l\'association',
            member: '60d1f5f5c1b6e3c8e8d9c7e3'
        },
        Workshops: {
            title: 'Atelier de cuisine',
            date: '2021-06-23',
            place: 'Place de la Mairie',
            description: 'Atelier de cuisine pour les enfants',
            member: '60d1f5f5c1b6e3c8e8d9c7e3'
        },
        Selections: {
            isVolunteer: true,
            isSelected: true,
            member: '60d1f5f5c1b6e3c8e8d9c7e3',
            event: '60d1f5f5c1b6e3c8e8d9c7e3'
        },
        Roles: {
            name: 'Président'
        },
        Coaches: {

            name: 'Tintin',
            email: 'tintin@gmail.com',
            password: 'password',
            phone: '0606060606',
        }
    }
};

const outputFile = './swagger-output.json';
const routes = ['./app.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
    require('./app.js'); // Your project's root file
});