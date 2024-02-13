const mongoose = require('mongoose');

const selectionsSchema = mongoose.Schema({
    isVolunteer: { type: Boolean, required: true },
    isSelected: { type: Boolean, required: true },
    member: [{ type: mongoose.Types.ObjectId, ref: "Members" }],
    admin: [{ type: mongoose.Types.ObjectId, ref: "Admins" }]
})

module.exports = mongoose.model('Selections', selectionsSchema);



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