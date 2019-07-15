/* eslint-disable */

import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import logger from 'redux-logger'

const middleware = [
  thunk, logger
]


export default createStore(rootReducer, applyMiddleware(...middleware))
