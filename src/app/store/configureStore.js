import {createStore , compose , applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'

const middlewar = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export function configureStore() {
    return createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewar)))
}