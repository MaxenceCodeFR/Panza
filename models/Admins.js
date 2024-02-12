const mongoose = require('mongoose');

const adminsSchema = mongoose.Schema({
    firstname: { type: String, required: true },
    name: { type: [String], required: true },
    photo: { type: String, required: true, default: "https://picsum.photos/200/200" },
    email: { type: String, required: true },
    password: { type: String, required: true },
    events: [{ type: mongoose.Types.ObjectId, ref: "Events" }],

})

module.exports = mongoose.model('Admins', adminsSchema);

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