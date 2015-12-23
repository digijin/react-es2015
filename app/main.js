import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component';

window.onload = main;

function main() {
    ReactDOM.render(<Hello />, document.getElementById('mount'));
}
