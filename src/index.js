import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
require('babel-core/register');
require('babel-polyfill');

ReactDOM.render(<App />, document.getElementById('root'));
