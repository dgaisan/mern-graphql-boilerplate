const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: { type: String },
    description: { type: String },
    yearPublished: { type: String },
    authorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }
});

module.exports = mongoose.model('Book', BookSchema);
