import { Measurements } from 'interfaces/measurements'
import { Dispatch } from 'redux'
import { EditMeasurementsActionType } from "../action-types/editMeasurementsTypes"
import { Action } from '../actions/editMeasurementsActions'

export const setMeasurements = (measurements: Measurements | null) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: EditMeasurementsActionType.SET,
            payload: measurements
        })
    }
}