import {combineReducers} from 'redux'
import eventReducer from '../../feauters/events/eventReducer'
import testRedicer from '../../feauters/sanbox/testReducer'

const rootReducer = combineReducers({
    test: testRedicer,
    event : eventReducer,
})

export default rootReducer;