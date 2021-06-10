import { AnyAction } from 'redux'
export const ADD_SELECTED_SUBCATEGORY = 'ADD_SELECTED_SUBCATEGORY'
export const REMOVE_SELECTED_SUBCATEGORY = 'REMOVE_SELECTED_SUBCATEGORY'
export const SET_SELECTED_SUBCATEGORYS = 'SET_SELECTEDS'
export const TOGGLE_SELECTED_SUBCATEGORY = 'TOGGLE_SELECTEDS_SUBCATEGORY'
export const REMOVE_ALL_SELECTED_SUBCATEGORY = 'REMOVE_ALL_SELECTED_SUBCATEGORY'

import {IProps} from "../Interface";

const add = (items:string[],item:string): string[] => {
    var index = items.indexOf(item);
    if(index == -1) items.push(item);
    return items.sort((a,b)=>a>b?1:-1);
}

const remove = (items: string[], item: string): string[] => {
    var index = items.indexOf(item);
    if(index > -1) items.splice(index,1);
    return items.sort((a,b)=>a>b?1:-1);
}
const toggle = (items: string[], item: string): string[] => {
    console.log(items,item)
   if(items.indexOf(item)>-1) return remove(items,item);
   else return add(items,item);
}

const selectedSubCategories = (state: string = "", action: AnyAction) => {

    let selectedSubCategoriesList:string[] = [];
    selectedSubCategoriesList = state?state.split(","):[];
    switch (action.type) {
        case ADD_SELECTED_SUBCATEGORY:
            selectedSubCategoriesList = add(selectedSubCategoriesList, action.item);
            return selectedSubCategoriesList.join(",")
        case REMOVE_SELECTED_SUBCATEGORY:
            selectedSubCategoriesList = remove(selectedSubCategoriesList, action.item)
            return selectedSubCategoriesList.join(",")
        case TOGGLE_SELECTED_SUBCATEGORY:
            selectedSubCategoriesList = toggle(selectedSubCategoriesList, action.item)
            return selectedSubCategoriesList.join(",")
        case SET_SELECTED_SUBCATEGORYS:
            return action.items.join(",");
        case REMOVE_ALL_SELECTED_SUBCATEGORY:
            return "";
        default:
            return state;
    }
}

export type SelectedSubCategoriesState = string

export default selectedSubCategories
