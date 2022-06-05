import { ActionReducerMap } from '@ngrx/store';

import * as fromShoppingList from '../restaurant-table-list/store/shopping-list.reducer';
import * as fromTableListActions from '../restaurant-table-list/store/restaurant-table-list.reducer';
//import * as fromAuth from '../auth/store/auth.reducer';
//import * as fromRecipes from '../recipes/store/recipe.reducer';

export interface AppState {
  tableListData: fromTableListActions.State;
  shoppingList: fromShoppingList.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    tableListData: fromTableListActions.restaurantTableListReducer,
    shoppingList: fromShoppingList.shoppingListReducer,
};
