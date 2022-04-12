import React from 'react';
import './Wine.css';

function Wine(props) {
    return (
        <div className='wine'>
            <h3>{props.wine_name}</h3>
            <button>Edit</button>
            <button>Delete</button>
            <p>Winery: {props.winery}</p>
            <p>Varietal: {props.varietal}</p>
            <p>Vintage: {props.vintage}</p>
            <p>Rating: {props.rating}</p>
            <p>Notes: {props.notes}</p>
        </div>
    );
}

export default Wine;