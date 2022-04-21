import React from 'react';
import './WineList.css';
import store from '../store';
import Wine from '../Wine/Wine';
import { Link } from 'react-router-dom';

function WineList() {
    const wines = store.wines.map(wine => (
        <li key={wine.wine_id}>
            <Link to={`/wines/${wine.wine_id}`} className='wine-link'>
                <Wine 
                    {...wine}
                />
            </Link>
        </li>
    ));

    return (
        <div className='wine-list'>
            <h2>My Wines</h2>
            <select
                name='varietal-filter'
                id='varietal-filter'
            >
                <option value="All Wines">All Wines</option>
                <option value="Cabernet Sauvignon">Cabernet Sauvignon</option>
                <option value="Merlot">Merlot</option>
                <option value="Zinfandel">Zinfandel</option>
                <option value="Pinot Noir">Pinot Noir</option>
                <option value="Red Blend">Red Blend</option>
                <option value="Other Red">Other Red</option>
                <option value="Chardonnay">Chardonnay</option>
                <option value="Sauvignon Blanc">Sauvignon Blanc</option>
                <option value="Pinot Grigio">Pinot Grigio</option>
                <option value="White Blend">White Blend</option>
                <option value="Other White">Other White</option>
                <option value="Rosé">Rosé</option>
                <option value="Sparkling">Sparkling</option>
            </select>
            <p></p>
            <button id='add-wine-button'>Add Wine</button>
            <ul>
                {wines}
            </ul>
        </div>
    )
}

export default WineList;