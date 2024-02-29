const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const membersSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    name: { type: String, required: true },
    photo: { type: String, required: false, default: "https://picsum.photos/200/200" },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    presence: { type: Number, required: false, default: 0 },
    role: { type: mongoose.Types.ObjectId, ref: "Roles", default: "65dca8679d0339572169e0f8" }//default role is member
});

membersSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Members', membersSchema);

