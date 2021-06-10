import { combineReducers } from 'redux'
import { History } from 'history';
import { connectRouter } from 'connected-react-router'

import favorites, { FavoritesState } from './favorites'
import selectedSubCategories, { SelectedSubCategoriesState } from './selectedSubCategories'
import uiStatus, { UiStatus } from './ui'

const rootReducer = (history: History) =>
    combineReducers({
        favorites,
        selectedSubCategories,
        uiStatus,
        router: connectRouter(history)
    })

export interface State {
    favorites: FavoritesState,
    selectedSubCategories:SelectedSubCategoriesState,
    uiStatus:UiStatus
}

export default rootReducer
