import { Measurements } from "interfaces/measurements"
import { EditMeasurementsActionType } from "../action-types/editMeasurementsTypes"
import { Action } from "../actions/editMeasurementsActions"

const initialState: Measurements | null = null

const reducer = (state: Measurements | null = initialState, action: Action) => {
    switch (action.type) {
        case EditMeasurementsActionType.SET:
            return action.payload
        default:
            return state
    }
}

export default reducer