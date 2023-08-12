import mongoose from "mongoose";

const authorSchema = new mongoose.Schema({
    name: String,
    country: String,
});

export const Author = mongoose.model('Author', authorSchema);

const bookAuthor = new mongoose.Schema({
    authorId: {
        title: String,
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Author',
        },
    },
});

export const Book = mongoose.model('Book', bookAuthor);