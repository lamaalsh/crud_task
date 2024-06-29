import React from 'react';
import './BookItem.css';

const BookItem = ({ book, onDelete, onEdit }) => {
    return (
        <body>
        <div className="book-card">
            <h3>{book.title}</h3>
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Year:</strong> {book.year}</p>
            <button className="edit-button" onClick={() => onEdit(book)}>Edit</button>
            <button className="delete-button" onClick={() => onDelete(book.id)}>Delete</button>
        </div>
        </body>
    );
};

export default BookItem;
