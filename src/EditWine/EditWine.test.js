import React from 'react';
import ReactDOM from 'react-dom';
import EditWine from './EditWine';

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

    ReactDOM.render(<EditWine {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});