import React, { useState, useContext } from 'react';
import WineForm from '../WineForm/WineForm';
import config from '../config';
import WineContext from '../WineContext';
import './AddWine.css';

function AddWine(props) {
    const context = useContext(WineContext);

    const initialState = {
        error: null
    };

    const [error, setError] = useState({ ...initialState });

    const handleSubmit = (wine) => {
        setError({ ...initialState });

        fetch(`${config.API_ENDPOINT}/wines`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${config.API_KEY}`
            },
            body: JSON.stringify(wine)
        })
            .then(res => {
                if(!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
                return res.json();
            })
            .then(data => {
                context.addWine(data);
                props.history.push(`/wines/${data.wine_id}`);
            })
            .catch(error => {
                console.error(error);
                setError({ error });
            });
    }

    const handleClickCancel = () => {
        props.history.push('/wines');
    };

    return (
        <div className='add-wine'>
            <h2>Add Wine</h2>
            <WineForm
                error={error}
                onSubmit={handleSubmit}
                onCancel={handleClickCancel}
            />
        </div>
    )
}

export default AddWine;