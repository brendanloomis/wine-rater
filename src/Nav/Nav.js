import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import WineContext from '../WineContext';
import './Nav.css';

function Nav() {
    const context = useContext(WineContext);

    const checkLoggedIn = () => {
        // if user is logged in, render a log out link in the Nav bar
        if (context.loggedIn) {
            return (
                <>
                    <Link to='/wines' className='nav-item'>My Wines</Link>
                    {' '}
                    <Link to='/' className='nav-item' onClick={handleLogout}>Log Out</Link>
                </>
            )
        };
        // if user is not logged in, render a log in link in the Nav bar and My Wines links to log in page
        return (
            <>
                <Link to='/login' className='nav-item'>My Wines</Link>
                {' '}
                <Link to='/login' className='nav-item'>Log In</Link>
            </>
        )
    }

    const handleLogout = () => {
        context.logoutUser();
        localStorage.clear();
    };

    return (
        <div className='nav'>
            <Link to='/' className='nav-item'>Home</Link>
            {' '}
            {checkLoggedIn()}
        </div>
    );
}

export default Nav;