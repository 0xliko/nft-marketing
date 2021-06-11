import { AnyAction } from 'redux'
import {IProps} from "../Interface";



export const OPEN_SIDEBAR = 'OPEN_SIDEBAR';
export const CLOSE_SIDEBAR = 'CLOSE_SIDEBAR';
export const SET_CURRENT_PRODUCT = 'SET_CURRENT_PRODUCT';


const configStatus = (state: IProps = {sidebar:false,curProduct:{}}, action: AnyAction) => {
    switch (action.type) {
        case OPEN_SIDEBAR:
            return {...state,sidebar:true}
        case CLOSE_SIDEBAR:
            return {...state,sidebar:false}
        case SET_CURRENT_PRODUCT:
            return {...state,curProduct:action.product}
        default:
            return state
    }
}

export type ConfigStatus = IProps

export default configStatus
