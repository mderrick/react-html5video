/* eslint-disable global-require */

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

render(
    <App />,
    document.getElementById('content')
);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        const NextRoot = require('./components/App').default;
        render(
            <NextRoot />,
            document.getElementById('content')
        );
    });
}
