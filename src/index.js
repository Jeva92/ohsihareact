import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import News from './News';
import Comments from './Comments';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<News url='http://localhost:8000/json' pollInterval={2000} />, document.getElementById('news'));
ReactDOM.render(<Comments url='http://localhost:8000/comments' pollInterval={2000} />, document.getElementById('comments'));
