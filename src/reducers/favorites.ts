import { AnyAction } from 'redux'



export const ADD_FAVORITE_PRODUCT = 'ADD_FAVORITE_PRODUCT'
export const REMOVE_FAVORITE_PRODUCT = 'ADD_OR_REMOVE_FAVORITE_PRODUCT'
export const SET_FAVORITES = 'SET_FAVORITES'

const add = (items:number[],item:number): number[] => {
    const index = items.indexOf(item)
    if (index < 0) {
        items.push(item)
    }
    return items;
}

const remove = (items: number[], item: number): number[] => {
    const index = items.indexOf(item)

    if (index >= 0) {
        items.splice(index, 1)
    }

    return items
}

const favorites = (state: number[] = [], action: AnyAction) => {
    let favoritesList

    switch (action.type) {
        case ADD_FAVORITE_PRODUCT:
            favoritesList = add(state, action.PRODUCT)
            return favoritesList
        case REMOVE_FAVORITE_PRODUCT:
            favoritesList = remove(state, action.PRODUCT)
            return favoritesList
        case SET_FAVORITES:
            return action.PRODUCTS
        default:
            return state
    }
}

export type FavoritesState = number[]

export default favorites
