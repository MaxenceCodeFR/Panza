const mongoose = require('mongoose');

const mediasSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date('dd-mm-YYYY:HH:MM'), required: true },
    place: { type: String, required: true },
    description: { type: Text, required: true },
})

module.exports = mongoose.model('Events', eventsSchema);

// // My user schema

// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');

// var userSchema = new Schema({
//   username: String,
//   password: String
// });

// // hash the password
// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// // checking if password is valid
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };
// var User = mongoose.model('user', userSchema);
// module.exports = User;