const mongoose = require('mongoose');

const selectionsSchema = mongoose.Schema({
    isVolunteer: { type: Boolean, required: true },
    isSelected: { type: Boolean, required: true },
    member: [{ type: mongoose.Types.ObjectId, ref: "Members" }],
    event: [{ type: mongoose.Types.ObjectId, ref: "Events" }]
});

module.exports = mongoose.model('Selections', selectionsSchema);
