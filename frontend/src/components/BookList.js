// src/components/BookList.js
import React, { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../services/api';
import BookItem from './BookItem';
import { Link, useNavigate } from 'react-router-dom';
import './BookList.css'; 

const BookList = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await getBooks();
            setBooks(response.data.results);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteBook(id);
            fetchBooks();  
        } catch (error) {
            console.error('Error deleting book:', error);
        }
    };

    const handleEdit = (book) => {
        navigate(`/edit/${book.id}`);
    };

    return (
        <div className="book-list">
            <h2>Book List</h2>
            <Link to="/add" className="add-book-link">Add New Book</Link>
            {books.map(book => (
                <BookItem key={book.id} book={book} onDelete={handleDelete} onEdit={handleEdit} />
            ))}
        </div>
    );
};

export default BookList;
