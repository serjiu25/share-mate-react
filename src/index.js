import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducers from '../src/reducers';
import reduxThunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));