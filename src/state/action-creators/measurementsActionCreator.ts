import { Measurements } from 'interfaces/measurements'
import { Dispatch } from 'redux'
import { MeasurementsActionType } from "../action-types/measurementsTypes"
import { Action } from '../actions/measurementsActions'

export const listMeasurements = (measurements: Measurements[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: MeasurementsActionType.LIST,
            payload: measurements
        })
    }
}

export const createMeasurements = (measurements: Measurements) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: MeasurementsActionType.CREATE,
            payload: measurements
        })
    }
}

export const updateMeasurements = (measurements: Measurements) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: MeasurementsActionType.UPDATE,
            payload: measurements
        })
    }
}

export const deleteMeasurements = (measurementsId: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: MeasurementsActionType.DELETE,
            payload: measurementsId
        })
    }
}