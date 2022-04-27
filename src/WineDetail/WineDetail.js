import React, { useContext } from 'react';
import './WineDetail.css';
import { findWine } from '../helper-functions';
import WineContext from '../WineContext';
import { Link } from 'react-router-dom';
import config from '../config';

function WineDetail(props) {
    const context = useContext(WineContext);

    const { wine_id } = props.match.params;
    const wine = findWine(context.wines, parseInt(wine_id)) || {};

    const handleDelete = (wine_id) => {
        fetch(`${config.API_ENDPOINT}/wines/${wine_id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${config.API_KEY}`
            }
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
            })
            .then(() => {
                props.history.push('/wines');
                context.deleteWine(wine.wine_id);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className='wine-detail'>
            <h3>{wine.wine_name}</h3>
            <p>Winery: {wine.winery}</p>
            <p>Varietal: {wine.varietal}</p>
            <p>Vintage: {wine.vintage}</p>
            <p>Rating: {wine.rating}</p>
            <p>Notes: {wine.notes}</p>
            <div className='wine-detail-buttons'>
                <Link to={`/edit-wine/${wine.wine_id}`}>
                    <button>Edit</button>
                </Link>
                {' '}
                <button
                    id='delete-wine'
                    onClick={() => handleDelete(wine_id)}
                >
                    Delete
                </button>
                {' '}
                <button
                    onClick={() => props.history.push('/wines')}
                >
                    Back
                </button>
            </div>
        </div>
    )
}

export default WineDetail;