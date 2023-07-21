import { Register } from 'interfaces'
import { RegisterActionType } from '../action-types/registerTypes'

interface OpenCloseAction {
    type: RegisterActionType.OPEN_CLOSE,
    payload: Register
}

export type Action = OpenCloseAction