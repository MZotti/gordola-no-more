
import { Register } from "interfaces"
import { RegisterActionType } from "../action-types/registerTypes"
import { Action } from "../actions/registerActions"

const initialState: Register = {
    isOpen: false
}

const reducer = (state: Register = initialState, action: Action) => {
    switch (action.type) {
        case RegisterActionType.OPEN_CLOSE:
            return action.payload
        default:
            return state
    }
}

export default reducer