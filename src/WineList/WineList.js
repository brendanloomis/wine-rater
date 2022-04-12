import React from 'react';
import './WineList.css';
import store from '../store';
import Wine from '../Wine/Wine';
import WineNav from '../WineNav/WineNav';

function WineList() {
    const wines = store.wines.map(wine => (
        <li key={wine.wine_id}>
            <Wine 
                {...wine}
            />
        </li>
    ));

    return (
        <div className='wine-list'>
            <h2>My Wines</h2>
            <WineNav />
            <button>Add Wine</button>
            <ul>
                {wines}
            </ul>
        </div>
    )
}

export default WineList;