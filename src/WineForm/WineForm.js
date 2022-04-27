import React, { useState, useContext } from 'react';
import WineContext from '../WineContext';
import ValidationError from '../ValidationError';
import './WineForm.css';

function WineForm(props) {
    const context = useContext(WineContext);

    const initialState = {
        wine_id: props.wine.wine_id || undefined,
        wine_name: props.wine.wine_name || '',
        winery: props.wine.winery || '',
        varietal: props.wine.varietal || 'Cabernet Sauvignon',
        vintage: props.wine.vintage || '',
        rating: props.wine.rating || '1',
        notes: props.wine.notes || '',
        user_id: context.userInfo.user_id
    };

    const [formData, setFormData] = useState({ ...initialState });

    const handleChange = ({ target }) => {
        setFormData({
            ...formData,
            [target.name]: target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        const { wine_id, wine_name, winery, varietal, vintage, rating, notes, user_id } = formData;

        props.onSubmit(
            {
                wine_id,
                wine_name,
                winery,
                varietal,
                vintage,
                rating,
                notes,
                user_id
            }
        );
    }

    const { wine_id, wine_name, winery, varietal, vintage, rating, notes, user_id } = formData;
    const { error, onCancel } = props;

    return (
        <form className='wine-form' onSubmit={handleSubmit}>
            {wine_id && <input type='hidden' name='wine_id' value={wine_id}/>}
            {user_id && <input type='hidden' name='user_id' value={user_id} />}
            <div>
                <label htmlFor='wine-name'>Wine Name</label>
                <input 
                    type='text'
                    name='wine_name'
                    id='wine_name'
                    required
                    value={wine_name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='winery'>Winery</label>
                <input
                    type='text'
                    name='winery'
                    id='winery'
                    required
                    value={winery}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='varietal'>Varietal</label>
                <select 
                    name='varietal'
                    id='varietal'
                    required
                    defaultValue={varietal}
                    onChange={handleChange}
                >
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
            </div>
            <div>
                <label htmlFor='vintage'>Vintage</label>
                <input
                    type='text'
                    name='vintage'
                    id='vintage'
                    value={vintage}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='rating'>Rating</label>
                <select
                    name='rating'
                    id='rating'
                    required
                    defaultValue={rating}
                    onChange={handleChange}
                >
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select>
            </div>
            <div>
                <label htmlFor='notes'>Notes</label>
                <textarea
                    name='notes'
                    id='notes'
                    value={notes}
                    onChange={handleChange}
                />
            </div>
            {error && <ValidationError message={error.message} />}
            <div className='wine-form-buttons'>
                <button type='submit'>Submit</button>
                {' '}
                <button onClick={onCancel}>Cancel</button>
            </div>
        </form>
    );
};

WineForm.defaultProps = {
    wine: {}
}

export default WineForm;