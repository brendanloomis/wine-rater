import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='nav'>
            <Link to='/' className='nav-item'>Home</Link>
            {' '}
            <Link to='/login' className='nav-item'>Log In</Link>
        </div>
    );
}

export default Nav;