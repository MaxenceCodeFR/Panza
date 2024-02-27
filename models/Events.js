const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    member: [{ type: mongoose.Types.ObjectId, ref: "Members" }],
})

module.exports = mongoose.model('Events', eventsSchema);

