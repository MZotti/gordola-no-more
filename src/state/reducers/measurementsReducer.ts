
import { storeMeasurements } from "functions/storage"
import { Measurements } from "interfaces/measurements"
import { MeasurementsActionType } from "../action-types/measurementsTypes"
import { Action } from "../actions/measurementsActions"

const initialState: Measurements[] = []

const reducer = (state: Measurements[] = initialState, action: Action) => {
    switch (action.type) {
        case MeasurementsActionType.LIST:
            return action.payload
        case MeasurementsActionType.CREATE:
            storeMeasurements([ ...state, action.payload ])
            return [
                ...state,
                action.payload
            ];
        case MeasurementsActionType.UPDATE:
            return state.map(st => {
                if(st.id === action.payload.id) st = action.payload
                return st
            })
        case MeasurementsActionType.DELETE:
            return state.filter(st => st.id !== action.payload)
        default:
            return state
    }
}

export default reducer