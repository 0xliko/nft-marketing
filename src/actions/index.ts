import { ADD_FAVORITE,REMOVE_FAVORITE,SET_FAVORITES } from '../reducers/favorites';
import { ADD_SELECTED_SUBCATEGORY,REMOVE_SELECTED_SUBCATEGORY,SET_SELECTED_SUBCATEGORYS} from '../reducers/selectedSubCategories';
import { OPEN_SIDEBAR,CLOSE_SIDEBAR } from '../reducers/config';

export const addFavorite = (item: number) => ({
    type: ADD_FAVORITE_PRODUCT,
    item,
})

export const removeFavorite = (item: number) => ({
    type: REMOVE_FAVORITE_PRODUCT,
    item,
})

export const setFavorites = (items: number[]) => ({
    type: SET_FAVORITES,
    items,
})

export const setSelected = (item: number) => ({
    type: ADD_SELECTED_SUBCATEGORY,
    item,
})

export const unSetSelected = (item: number) => ({
    type: REMOVE_SELECTED_SUBCATEGORY,
    item,
})

export const setSelectedAll = (items: number[]) => ({
    type: SET_SELECTED_SUBCATEGORYS,
    items,
})

export const openSideBar = ()=>({
    type:OPEN_SIDEBAR
})
export const closeSideBar = ()=>({
    type:CLOSE_SIDEBAR
})