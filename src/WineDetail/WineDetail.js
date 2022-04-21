import React from 'react';
import './WineDetail.css';
import store from '../store';

function WineDetail(props) {
    const { wine_id } = props.match.params;
    const wine = store.wines.filter(wine => wine.wine_id === wine_id)[0];

    return (
        <div className='wine-detail'>
            <h3>{wine.wine_name}</h3>
            <p>Winery: {wine.winery}</p>
            <p>Varietal: {wine.varietal}</p>
            <p>Vintage: {wine.vintage}</p>
            <p>Rating: {wine.rating}</p>
            <p>Notes: {wine.notes}</p>
            <div className='wine-detail-buttons'>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default WineDetail;