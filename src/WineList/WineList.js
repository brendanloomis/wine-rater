import React, { useState, useContext } from 'react';
import './WineList.css';
import WineContext from '../WineContext';
import Wine from '../Wine/Wine';
import { Link } from 'react-router-dom';

function WineList() {
    const context = useContext(WineContext);

    const initialState = {
        varietal: 'All Wines'
    };

    const [stateData, setStateData] = useState({ ...initialState });

    let wineItems;

    if (stateData.varietal === 'All Wines') {
        wineItems = context.wines.map(wine => (
            <li key={wine.wine_id}>
                <Link to={`/wines/${wine.wine_id}`} className='wine-link'>
                    <Wine 
                        {...wine}
                    />
                </Link>
            </li>
        ));
    } else {
        wineItems = context.wines.filter(wine => wine.varietal === stateData.varietal).map(w => (
            <li key={w.wine_id}>
                <Link to={`/wines/${w.wine_id}`} className='wine-link'>
                    <Wine 
                        {...w}
                    />
                </Link>
            </li>
        ));
    }

    const handleChange = ({ target }) => {
        setStateData({
            varietal: target.value
        });
    }

    return (
        <div className='wine-list'>
            <h2>My Wines</h2>
            <select
                name='varietal-filter'
                id='varietal-filter'
                defaultValue={'All Wines'}
                onChange={handleChange}
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
            <Link to={'/add-wine'} id='add-wine-link'>
                <button id='add-wine-button'>Add Wine</button>
            </Link>
            <ul>
                {wineItems}
            </ul>
        </div>
    )
}

export default WineList;