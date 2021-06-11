import { AnyAction } from 'redux'
export const ADD_FAVORITE = 'ADD_FAVORITE'
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
export const SET_FAVORITES = 'SET_FAVORITE'
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE'
export const REMOVE_ALL_FAVORITE = 'REMOVE_ALL_FAVORITE'

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
    if(items.indexOf(item)>-1) return remove(items,item);
    else return add(items,item);
}

const favorites = (state: string = "", action: AnyAction) => {

    let favoritesList:string[] = [];
    favoritesList = state?state.split(","):[];
    switch (action.type) {
        case ADD_FAVORITE:
            favoritesList = add(favoritesList, action.item);
            return favoritesList.join(",")
        case REMOVE_FAVORITE:
            favoritesList = remove(favoritesList, action.item)
            return favoritesList.join(",")
        case TOGGLE_FAVORITE:
            favoritesList = toggle(favoritesList, action.item)
            return favoritesList.join(",")
        case SET_FAVORITES:
            return action.items.join(",");
        case REMOVE_ALL_FAVORITE:
            return "";
        default:
            return state;
    }
}

export type FavoritesState = string

export default favorites
