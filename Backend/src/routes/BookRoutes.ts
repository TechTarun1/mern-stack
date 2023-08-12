import { Router } from "express";

const { AddAuthor,AddBook,GetBooks,GetAuthors} = require('../controllers/BookAuthorController')

const router: Router = Router();

router.post('/add-book', AddBook);
router.post('/add-author', AddAuthor);
router.get('/get-authors', GetAuthors);
router.get('/get-books', GetBooks);

module.exports = router;