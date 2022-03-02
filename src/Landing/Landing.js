import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

function Landing() {
    return (
        <div className='landing'>
            <section className='about'>
                <h2>What is Wine Rater?</h2>
                <p>Wine Rater allows you to keep notes on all of the wines that you drink. With Wine Rater you can add a wine to your profile and add tasting notes and ratings so you can remember your thoughts on the wine.</p>
            </section>
            <section className='features'>
                <h2>Rank your top 10 wines</h2>
                <p>With wine rater you can also keep a top 10 list of your favorite wines. You can even keep a separate list for reds, whites, rosés, and sparkling wines.</p>
            </section>
            <section className='get-started'>
                <h2>Sign up today!</h2>
                <p>Create a <Link to='/signup' className='landing-signup'>new account</Link> or log in with the demo account to get started today!</p>
            </section>
        </div>
    );
}

export default Landing;