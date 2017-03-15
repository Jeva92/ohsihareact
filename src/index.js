import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Navi, Header, Content} from './App';

ReactDOM.render(<Navi />, document.getElementById('navi'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Content />, document.getElementById('content'));
