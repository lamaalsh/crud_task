import React, { useState, useEffect } from 'react';
import { createBook, updateBook, getBook } from '../services/api';
import { useNavigate, useParams } from 'react-router-dom';
import './BookForm.css'; 
const BookForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (id) {
            fetchBook(id);
        }
    }, [id]);

    const fetchBook = async (id) => {
        try {
            const response = await getBook(id);
            const book = response.data.book;
            setTitle(book.title);
            setAuthor(book.author);
            setYear(book.year);
        } catch (error) {
            console.error('Error fetching book:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const book = { title, author, year: parseInt(year) };

        try {
            if (id) {
                await updateBook(id, book);
            } else {
                await createBook(book);
            }
            navigate('/');
        } catch (error) {
            console.error('Error saving book:', error);
        }
    };

    return (
        <body>
        <form onSubmit={handleSubmit}>
            <h2 className='header'>{id ? 'Edit Book' : 'Add New Book'}</h2>
            <div className='comp' >
                <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
            </div>
            <div>
                <label>Year:</label>
                <input type="number" value={year} onChange={(e) => setYear(e.target.value)} required />
            </div>
        
            </div>
            <button type="submit">Submit</button>
        </form>
        </body>
    );
};

export default BookForm;
