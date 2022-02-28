import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import './index.css';
import {searchRobots, requestRobots} from './reducers';
import { createLogger } from 'redux-logger';
import App from './containers/App';
import ThunkMiddleware from 'redux-thunk'


import 'tachyons'; 

const logger = createLogger();

const rootReducer = combineReducers({searchRobots, requestRobots})

const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware,logger))



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

