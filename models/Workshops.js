const mongoose = require('mongoose');


const workshopsSchema = mongoose.Schema({
    name: { type: String, required: true },
    coach: { type: String, required: true },
    date: { type: Date, required: true },
    place: { type: String, required: true },
    description: { type: String, required: true },
    grade: { type: Number, required: true },
    unsubscribe: { type: Boolean, required: true },
    member: [{ type: mongoose.Types.ObjectId, ref: "Members" }]
})

module.exports = mongoose.model('Workshops', workshopsSchema);

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