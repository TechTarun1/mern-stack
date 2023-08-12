import { Request, Response } from "express";
import { Book, Author } from "../models/BookAuthorModel";

const AddBook = async (req: Request, res: Response) => {
    try {
        const { title, authorId } = req.body;
        console.log(req)
        const book = new Book({ title, authorId });
        await book.save();
        res.status(201).json(book);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const AddAuthor = async (req: Request, res: Response) => {
    try {
        const { name, country } = req.body;
        const author = new Author({ name, country });
        await author.save();
        res.status(201).json(author);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

const GetBooks = async (req: Request, res: Response) => {
    try {
      const books = await Book.aggregate([
        {
          $lookup: {
            from: 'authors',
            localField: '_id',
            foreignField: 'authorId',
            as: 'author',
          },
        },
      ]);
      res.json(books);
    } catch (error) {
      res.status(500).json({ error: 'Something went wrong' });
    }
  };
  

const GetAuthors = async (req: Request, res: Response) => {
    try {
        const authors = await Author.find();
        res.json(authors)
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
}

module.exports = { AddAuthor, AddBook, GetBooks,GetAuthors };