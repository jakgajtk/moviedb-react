import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
        React.createElement(Search),
        document.getElementById('app')
    );
});