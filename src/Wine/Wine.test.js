import React from 'react';
import ReactDOM from 'react-dom';
import Wine from './Wine';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        wine_name: 'Test',
        rating: '4'
    };

    ReactDOM.render(<Wine {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});