import { useState, useEffect } from 'react';
import axios from 'axios';

const Book = () => {
    const [authors, setAuthors] = useState([]);
    const [books, setBooks] = useState([]);
    const [title, setTitle] = useState('');
    const [authorId, setAuthorId] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        // Fetch authors and books data on component mount
        fetchAuthors();
        fetchBooks();
    }, []);

    const fetchAuthors = async () => {
        try {
            const response = await axios.get('http://localhost:4000/book/get-authors');
            setAuthors(response.data);
        } catch (error) {
            console.error('Error fetching authors:', error);
        }
    };

    const fetchBooks = async () => {
        try {
            const response = await axios.get('http://localhost:4000/book/get-books');
            setBooks(response.data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleAddBook = async () => {
        try {
            await axios.post('http://localhost:4000/book/add-book', {
                title,
                authorId,
            });
            setTitle('');
            setAuthorId('');
            fetchBooks(); // Refresh book list after adding a book
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    const addAuthor = async () => {
        try {
            await axios.post('http://localhost:4000/book/add-author', {
                name, country
            }).then((response)=>{
                alert('res'+response)
                setTitle('');
                setAuthorId('');
            }).catch((err:any)=>{
                alert(err)
            })
        } catch (error) {
            console.error('Error adding book:', error);
        }
    }

    return (
        <div>
            <h1>MERN Aggregation Lookup</h1>
            <div>
                <h2>Add Book</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <select value={authorId} onChange={(e) => setAuthorId(e.target.value)}>
                    <option value="">Select an author</option>
                    {authors.map((author: any) => (
                        <option key={author._id} value={author._id}>
                            {author.name}
                        </option>
                    ))}
                </select>
                <button onClick={handleAddBook}>Add Book</button>
            </div>
            <div>
                <h2>Books</h2>
                <ul>
                    {books.map((book: any) => (
                        <li key={book._id}>
                            {book.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h1>Add author</h1>
                <input type="text" onChange={(e: any) => { setName(e.target.value) }} value={name} placeholder='name' />
                <input type="text" onChange={(e: any) => { setCountry(e.target.value) }} value={country} placeholder='country' />
                <button onClick={() => addAuthor()}>Add Author</button>
            </div>
        </div>
    );
};

export default Book;
