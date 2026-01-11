const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    // will be added later
});
const User = mongoose.model('User',UserSchema);

module.exports = User;