import { ActionReducerMap } from '@ngrx/store';

import * as fromReservationList from '../reserve-table/store/reserve-table.reducer';
import * as fromTableListActions from '../restaurant-table-list/store/restaurant-table-list.reducer';
//import * as fromAuth from '../auth/store/auth.reducer';
//import * as fromRecipes from '../recipes/store/recipe.reducer';

export interface AppState {
  tableListData: fromTableListActions.State;
  reservationData: fromReservationList.State;
}

export const appReducer: ActionReducerMap<AppState, any> = {
    tableListData: fromTableListActions.restaurantTableListReducer,
    reservationData: fromReservationList.recipeReducer
};
