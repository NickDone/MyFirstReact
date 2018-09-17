import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker.js';
import Routes from './Routes.js';
ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
