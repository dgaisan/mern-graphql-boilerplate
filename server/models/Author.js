const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
    name: { type: String },
    born: { type: String },
    email: { type: String },
    phone: { type: String },
});

module.exports = mongoose.model('Author', AuthorSchema);
