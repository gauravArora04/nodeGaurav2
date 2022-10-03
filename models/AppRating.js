const mongoose = require('mongoose');
const { Schema } = mongoose;
const AppRatingRecipientSchema = require('./AppRatingRecipient');

const appRatingSchema = new Schema({
    recipients: [AppRatingRecipientSchema],
    one: {type: Number, default: 0},
    two: {type: Number, default: 0},
    three: {type: Number, default: 0},
    four: {type: Number, default: 0},
    five: {type: Number, default: 0},
    lastResponseDate: Date
});

mongoose.model('appratings', appRatingSchema);