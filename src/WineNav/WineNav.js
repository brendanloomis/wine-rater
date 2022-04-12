import React from 'react';
import { Link } from 'react-router-dom';
import './WineNav.css';

function WineNav() {
    // change this to be a filter instead of linking to new pages
    // add an all wines button
    return (
        <div className='wine-nav'>
            <Link to='/wines/cabernet-sauvignon' className='wine-nav-item'>Cabernet Sauvignon</Link>
            {' '}
            <Link to='/wines/merlot' className='wine-nav-item'>Merlot</Link>
            {' '}
            <Link to='/wines/zinfandel' className='wine-nav-item'>Zinfandel</Link>
            {' '}
            <Link to='/wines/pinot-noir' className='wine-nav-item'>Pinot Noir</Link>
            {' '}
            <Link to='/wines/red-blend' className='wine-nav-item'>Red Blend</Link>
            {' '}
            <Link to='/wines/other-red' className='wine-nav-item'>Other Red</Link>
            {' '}
            <Link to='/wines/chardonnay' className='wine-nav-item'>Chardonnay</Link>
            {' '}
            <Link to='/wines/sauvignon-blanc' className='wine-nav-item'>Sauvignon Blanc</Link>
            {' '}
            <Link to='/wines/pinot-grigio' className='wine-nav-item'>Pinot Grigio</Link>
            {' '}
            <Link to='/wines/white-blend' className='wine-nav-item'>White Blend</Link>
            {' '}
            <Link to='/wines/other-white' className='wine-nav-item'>Other White</Link>
            {' '}
            <Link to='/wines/rose' className='wine-nav-item'>Rosé</Link>
            {' '}
            <Link to='/wines/sparkling' className='wine-nav-item'>Sparkling</Link>
        </div>
    )
}

export default WineNav;