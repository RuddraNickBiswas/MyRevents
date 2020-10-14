import {combineReducers} from 'redux'
import authReducer from '../../feauters/auth/authReducer';
import eventReducer from '../../feauters/events/eventReducer'
import testRedicer from '../../feauters/sanbox/testReducer'
import modalReducer from '../common/modals/modalReducer';

const rootReducer = combineReducers({
    test: testRedicer,
    event : eventReducer,
    modals : modalReducer,
    auth : authReducer
})

export default rootReducer;