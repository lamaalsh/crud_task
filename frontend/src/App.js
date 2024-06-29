// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookForm from './components/BookForm';
import Navbar from './components/Navbar'; 

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar /> {}
                <Routes>
                    <Route path="/" element={<BookList />} />
                    <Route path="/add" element={<BookForm />} />
                    <Route path="/edit/:id" element={<BookForm />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
