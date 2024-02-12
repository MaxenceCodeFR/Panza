const mongoose = require('mongoose');

const calendar = mongoose.Schema({
    date: { type: Date('dd-mm-YYYY:HH:MM'), required: true },
    allDay: { type: Boolean, required: false }
})

module.exports = mongoose.model('Events', eventsSchema);