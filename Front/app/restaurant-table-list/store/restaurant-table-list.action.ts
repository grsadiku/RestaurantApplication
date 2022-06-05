import { Action } from '@ngrx/store';

import { RestaurantTable } from '../models/restaurant-table.model';

export const FETCH_TABLES = '[Shopping List] Fetch Tables';
export const SET_TABLES = '[Recipes] Set TABLES';
//export const GET_TABLES_SUCCESS = '[Shopping List] Get Tables Success';
export const ADD_RESTAURANT_TABLE = '[Shopping List] Add Restaurant Table';
export const ADD_RESTAURANT_TABLES = '[Shopping List] Add Restaurant Tables';
export const UPDATE_RESTAURANT_TABLE = '[Shopping List] Update Restaurant Table';
export const DELETE_RESTAURANT_TABLE = '[Shopping List] Delete Restaurant Table';
export const START_EDIT = '[Shopping List] Start Edit';
export const STOP_EDIT = '[Shopping List] Stop Edit';
export const SEARCH_TABLES = '[Shopping List] Search TABLES';

// export const ADD_RESTAURANT_TABLE = 'ADD_RESTAURANT_TABLE';
// export const ADD_RESTAURANT_TABLES = 'ADD_RESTAURANT_TABLES';
// export const UPDATE_RESTAURANT_TABLE = 'UPDATE_RESTAURANT_TABLE';
// export const DELETE_RESTAURANT_TABLE = 'DELETE_RESTAURANT_TABLE';
// export const START_EDIT = 'START_EDIT';
// export const STOP_EDIT = 'STOP_EDIT';

// export class AddRestaurantTable implements Action {
//   readonly type = ADD_RESTAURANT_TABLE;

//   constructor(public payload: RestaurantTable) {}
// }

// export class AddRestaurantTables implements Action {
//   readonly type = ADD_RESTAURANT_TABLES;

//   constructor(public payload: RestaurantTable[]) {}
// }

// export class UpdateRestaurantTable implements Action {
//   readonly type = UPDATE_RESTAURANT_TABLE;

//   constructor(public payload: RestaurantTable ) {}
// }

// export class DeleteRestaurantTable implements Action {
//   readonly type = DELETE_RESTAURANT_TABLE;
// }

// export class StartEdit implements Action {
//   readonly type = START_EDIT;

//   constructor(public payload: number) {}
// }

// export class StopEdit implements Action {
//   readonly type = STOP_EDIT;
// }

// export type RestaurantTableActions =
//     AddRestaurantTable
//   | AddRestaurantTables
//   | UpdateRestaurantTable
//   | DeleteRestaurantTable
//   | StartEdit
//   | StopEdit;

export class FetchTables implements Action {
  readonly type = FETCH_TABLES;

}

export class SetTables implements Action {
  readonly type = SET_TABLES;

  constructor(public payload: RestaurantTable[]) {}
}

// export class GetTablesSuccess implements Action {
//   readonly type = GET_TABLES_SUCCESS;

//   constructor(public payload: RestaurantTable[]) {}
// }

export class AddRestaurantTable implements Action {
  readonly type = ADD_RESTAURANT_TABLE;

  constructor(public payload: RestaurantTable) {}
}

export class AddRestaurantTables implements Action {
  readonly type = ADD_RESTAURANT_TABLES;

  constructor(public payload: RestaurantTable[]) {}
}

export class UpdateRestaurantTable implements Action {
  readonly type = UPDATE_RESTAURANT_TABLE;

  constructor(public payload: RestaurantTable ) {}
}

export class DeleteRestaurantTable implements Action {
  readonly type = DELETE_RESTAURANT_TABLE;
}

export class StartEdit implements Action {
  readonly type = START_EDIT;

  constructor(public payload: number) {}
}

export class StopEdit implements Action {
  readonly type = STOP_EDIT;
}


export class SearchTables implements Action {
  readonly type = SEARCH_TABLES;

  constructor(public payload:  { size: number} ) {}

}

export type RestaurantTableActions =
    AddRestaurantTable
  | AddRestaurantTables
  | UpdateRestaurantTable
  | DeleteRestaurantTable
  | StartEdit
  | StopEdit
  | FetchTables
  | SetTables
  | SearchTables;
