import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './components/demo';

// For hot reloading to work it is essential
// that our entry point only contains this render
// and that the first component is a module.
ReactDOM.render(
    <Demo />,
    document.getElementById('content')
);
