import React from 'react';
import ReactDOM from 'react-dom';
import { register } from 'register-service-worker';
import App from './components/App';

// Хуки - плейлист
// import App from "./ru.reactjs.org/App";

ReactDOM.render(<App />, document.getElementById('root'));
register('', undefined);
