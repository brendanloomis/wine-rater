import React from 'react';
import './Wine.css';

function Wine(props) {
    return (
        <div className='wine'>
            <h3>{props.wine_name}</h3>
            <p>Rating: {props.rating}</p>
        </div>
    );
}

export default Wine;