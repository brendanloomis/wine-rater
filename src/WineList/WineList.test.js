import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import WineList from './WineList';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
        <BrowserRouter>
            <WineList />
        </BrowserRouter>,
        div
    );

    ReactDOM.unmountComponentAtNode(div);
});