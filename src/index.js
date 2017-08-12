import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'; // For PWAs

import App from './components/App/App';

import 'bulma/css/bulma.css';
import './styles/app.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

// For PWAs
registerServiceWorker();
