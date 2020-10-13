import {createStore , compose} from 'redux'
import rootReducer from './rootRecucer'


const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


export function configureStore () {

    return createStore(rootReducer , composeEnhancers())
}