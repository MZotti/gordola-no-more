import { combineReducers } from 'redux'
import measurementsReducer from './measurementsReducer'
import editMeasurementsReducer from './editMeasurementsReducer'
import registerReducer from './registerReducer'

const reducers = combineReducers({
    measurements: measurementsReducer,
    editMeasurements: editMeasurementsReducer,
    register: registerReducer,
})

export default reducers

export type State = ReturnType<typeof reducers>