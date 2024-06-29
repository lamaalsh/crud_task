import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/" className="navbar-brand">My Book Shop</Link>
            <div className="navbar-links">
                <Link to="/">Home</Link>
                <Link to="/add">Add Book</Link>
             
            </div>
        </nav>
    );
};

export default Navbar;
