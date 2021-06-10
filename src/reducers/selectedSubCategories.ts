import { AnyAction } from 'redux'
export const ADD_SELECTED_SUBCATEGORY = 'ADD_SELECTED_SUBCATEGORY'
export const REMOVE_SELECTED_SUBCATEGORY = 'REMOVE_SELECTED_SUBCATEGORY'
export const SET_SELECTED_SUBCATEGORYS = 'SET_SELECTEDS'
export const TOGGLE_SELECTED_SUBCATEGORY = 'TOGGLE_SELECTEDS_SUBCATEGORY'
import {IProps} from "../Interface";

const add = (items:IProps,item:string): IProps => {
    items["item_"+item] = item;
    return items;
}

const remove = (items: IProps, item: string): IProps => {
    delete items["item_"+item];
    return items;

}
const toggle = (items: IProps, item: string): IProps => {
    items["side_bar"] = item;
    return items;
    if (items["item_"+item])
         remove(items,item)
    else
        add(items,item);
    return items
}

const selectedSubCategories = (state: IProps = {}, action: AnyAction) => {
    let selectedSubCategoriesList;
    console.log(state)
    switch (action.type) {
        case ADD_SELECTED_SUBCATEGORY:
            selectedSubCategoriesList = add(state, action.item);
            return selectedSubCategoriesList
        case REMOVE_SELECTED_SUBCATEGORY:
            selectedSubCategoriesList = remove(state, action.item)
            return selectedSubCategoriesList
        case TOGGLE_SELECTED_SUBCATEGORY:
            //selectedSubCategoriesList = toggle(state, action.item)
            return action.item
            return selectedSubCategoriesList
        case SET_SELECTED_SUBCATEGORYS:
            return action.items
        default:
            return "";//state
    }
}

export type SelectedSubCategoriesState = string

export default selectedSubCategories
