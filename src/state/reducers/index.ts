import { combineReducers } from 'redux'
import measurementsReducer from './measurementsReducer'
import registerReducer from './registerReducer'

const reducers = combineReducers({
    measurements: measurementsReducer,
    register: registerReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>