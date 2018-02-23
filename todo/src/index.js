import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import todoApp from './reducers/reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(todoApp);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
