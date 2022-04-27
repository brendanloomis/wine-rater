import React, { useState, useContext, useEffect } from 'react';
import WineForm from '../WineForm/WineForm';
import config from '../config';
import WineContext from '../WineContext';
import './EditWine.css';

function EditWine(props) {
    const context = useContext(WineContext);

    const initialState = {
        error: null,
        wine_id: null,
        wine_name: null,
        winery: null,
        varietal: null,
        vintage: null,
        rating: null,
        notes: null,
        infoReady: false
    };

    const [formData, setFormData] = useState({ ...initialState });

    // get current information for the wine
    useEffect(() => {
        const { wine_id } = props.match.params;

        fetch(`${config.API_ENDPOINT}/wines/${wine_id}`, {
            method: 'GET',
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
                return res.json();
            })
            .then(data => {
                setFormData({
                    wine_id: data.wine_id,
                    wine_name: data.wine_name,
                    winery: data.winery,
                    varietal: data.varietal,
                    vintage: data.vintage,
                    rating: data.rating,
                    notes: data.notes,
                    infoReady: true
                });
            })
            .catch(error => {
                console.error(error);
                setFormData({ error });
            })
    }, []);

    const handleSubmit = (wine) => {
        setFormData({ error: null });

        fetch(`${config.API_ENDPOINT}/wines/${wine.wine_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${config.API_KEY}`
            },
            body: JSON.stringify(wine)
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(error => {
                        throw error;
                    });
                }
            })
            .then(() => {
                context.updateWine(wine);
                props.history.push(`/wines/${wine.wine_id}`);
            })
    }

    const handleClickCancel = () => {
        const { wine_id } = props.match.params;
        props.history.push(`/wines/${wine_id}`);
    }

    const renderForm = (wine) => {
        if (formData.infoReady) {
            return (
                <WineForm
                    error={formData.error}
                    onSubmit={handleSubmit}
                    onCancel={handleClickCancel}
                    wine={wine}
                />
            );
        }
    }

    const wine = {
        wine_id: formData.wine_id,
        wine_name: formData.wine_name,
        winery: formData.winery,
        varietal: formData.varietal,
        vintage: formData.vintage,
        rating: formData.rating,
        notes: formData.notes
    }

    return (
        <div className='edit-wine'>
            <h2>Edit Wine</h2>
            {renderForm(wine)}
        </div>
    );
}

export default EditWine;