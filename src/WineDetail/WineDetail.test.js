import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WineDetail from './WineDetail';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        history: {
            push: () => {}
        },
        match: {
            params: {}
        }
    };

    ReactDOM.render(
        <BrowserRouter>
            <WineDetail {...props} />
        </BrowserRouter>, 
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});