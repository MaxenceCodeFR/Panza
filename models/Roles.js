const mongoose = require('mongoose');

const rolesSchema = mongoose.Schema({

    roleName: { type: String, required: true }

});

module.exports = mongoose.model('Roles', rolesSchema);

