const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    yearPublished: { type: String }
});

module.exports = mongoose.model('Book', BookSchema);
