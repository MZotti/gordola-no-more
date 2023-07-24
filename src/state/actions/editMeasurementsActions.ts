import { Measurements } from 'interfaces/measurements'
import { EditMeasurementsActionType } from '../action-types/editMeasurementsTypes'

interface SetAction {
    type: EditMeasurementsActionType.SET,
    payload: Measurements | null
}

export type Action = SetAction