import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    return (
        <div className='login'>
            <h2>Log In</h2>
            <form className='login-form'>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        id='username'
                        required
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        id='password'
                        required
                    />                
                </div>
                <div className='login-buttons'>
                    <button
                        type='submit'
                    >
                        Log In
                    </button>
                    {' '}
                    <Link to='/'>
                        <button>Cancel</button>
                    </Link>
                </div>
            </form>
            <p>
                Don't have an account? <Link to='/signup'>Sign Up</Link>
            </p>
        </div>
    );
}

export default Login;