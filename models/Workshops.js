const mongoose = require('mongoose');


const workshopsSchema = mongoose.Schema({
    name: { type: String, required: true },
    coach: { type: mongoose.Types.ObjectId, ref: "Coaches" },
    date: { type: Date },
    place: { type: String, },
    description: { type: String },
    // member: [{ type: mongoose.Types.ObjectId, ref: "Members" }]
})

module.exports = mongoose.model('Workshops', workshopsSchema);



