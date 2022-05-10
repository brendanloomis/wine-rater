import React from 'react';
import ReactDOM from 'react-dom';
import WineForm from './WineForm';

it('renders without crashing', () => {
    const div = document.createElement('div');

    const props = {
        onSubmit: () => {},
        onCancel: () => {}
    };

    ReactDOM.render(<WineForm {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
});