import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker'; // For PWAs

import 'bulma/css/bulma.css';
import 'styles/app.css';

function Hello() {
    return (
        <h1>Hello</h1>
    );
}

// This is also an option. Same result as above
// const Hello = () => <h1>Hello</h1>;

// ReactDOM.render(What, Where);

ReactDOM.render(<Hello />, document.getElementById('root'));

// For PWAs
registerServiceWorker();
