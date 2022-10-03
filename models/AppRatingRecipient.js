const mongoose = require('mongoose');
const { Schema } = mongoose;

const appRatingRecipientSchema = new Schema({
    email: String,
    responded: { type: Boolean, default: false}
});

module.exports = appRatingRecipientSchema;