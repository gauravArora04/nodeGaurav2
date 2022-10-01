const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    name: String,
    email: String,
    profilePic: String,
    creds: { type: Number, default: 0},
    username: String,
    hash: String,
    dob: Date,
    mob: Number,
    country: String
});

mongoose.model('users', userSchema);
