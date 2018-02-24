import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, logger);


export default createStore(rootReducer, middleware);