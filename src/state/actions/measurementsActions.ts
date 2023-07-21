import { Measurements } from 'interfaces/measurements'
import { MeasurementsActionType } from '../action-types/measurementsTypes'

interface ListAction {
    type: MeasurementsActionType.LIST,
    payload: Measurements[]
}

interface CreateAction {
    type: MeasurementsActionType.CREATE,
    payload: Measurements
}

interface UpdateAction {
    type: MeasurementsActionType.UPDATE,
    payload: Measurements
}

interface DeleteAction {
    type: MeasurementsActionType.DELETE,
    payload: string
}

export type Action = ListAction | CreateAction | UpdateAction | DeleteAction