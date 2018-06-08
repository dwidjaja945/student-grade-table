import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from './middleware/promise';
import rootReducer from './reducers';

import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = createStore( rootReducer , {} , applyMiddleware(promiseMiddleware) );

ReactDOM.render(

<Provider store={store}>
    <App />
</Provider>
    
    , document.getElementById('root'));
registerServiceWorker();
