import React from 'react';
import ReactDOM from 'react-dom';
import AddWine  from './AddWine';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        history: {
            push: () => {}
        }
    };

    ReactDOM.render(<AddWine {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});