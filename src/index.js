import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'; // For PWAs

import SeriesCard from 'components/SeriesCard/SeriesCard';

import 'bulma/css/bulma.css';
import 'styles/app.css';

ReactDOM.render(<SeriesCard />, document.getElementById('root'));

// For PWAs
registerServiceWorker();
