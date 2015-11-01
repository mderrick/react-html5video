import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index/index';

// For hot reloading to work it is essential
// that our entry point only contains this render
// and that the first component is a module.
ReactDOM.render(
    <Index />,
    document.getElementById('content')
);
