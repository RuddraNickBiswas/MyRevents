import {createStore , compose , applyMiddleware} from 'redux';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk'
import { verifyAuth } from '../../features/auth/authActions';

const middlewar = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export function configureStore() {
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middlewar)))
    store.dispatch(verifyAuth())

    return store
}