import { AnyAction } from 'redux'
import {IProps} from "../Interface";



export const OPEN_SIDEBAR = 'OPEN_SIDEBAR'
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR'


const uiStatus = (state: IProps = {sidebar:false}, action: AnyAction) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {...state,sidebar:true}
        case CLOSE_SIDEBAR:
            return {...state,sidebar:false}
        default:
            return state
    }
}

export type UiStatus = IProps

export default uiStatus
