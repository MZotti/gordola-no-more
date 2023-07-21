import { Register } from 'interfaces'
import { Dispatch } from 'redux'
import { RegisterActionType } from '../action-types/registerTypes'
import { Action } from '../actions/registerActions'

export const openCloseRegister = (register: Register) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: RegisterActionType.OPEN_CLOSE,
            payload: register
        })
    }
}