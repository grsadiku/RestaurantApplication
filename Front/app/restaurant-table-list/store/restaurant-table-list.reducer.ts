
import { RestaurantTable } from '../models/restaurant-table.model'; 

import * as RestaurantTableActionsList from "./restaurant-table-list.action";

export interface State {
  tables: RestaurantTable[];
  searchedTables: RestaurantTable[];
  editedTable: RestaurantTable;
  editedTableIndex: number;
}

const initialState: State = {
    tables: [],
    searchedTables: [],
    editedTable: new RestaurantTable('Dummy', 5, 1),
    editedTableIndex: -1
};

export function restaurantTableListReducer(
  state: State = initialState,
  action: RestaurantTableActionsList.RestaurantTableActions
) : State {
  switch (action.type) {
    case RestaurantTableActionsList.SET_TABLES:
      return {
        ...state,
        tables: [...action.payload],
        searchedTables: [...action.payload]
      };
      case RestaurantTableActionsList.SEARCH_TABLES:
        if(action.payload.size > 0)
        {
          return {
            ...state,
            searchedTables: state.tables.filter((table) => table.totalSeats == action.payload.size)
          }
        }else{
          return {
            ...state,
            searchedTables: state.tables
          }
        }
    case RestaurantTableActionsList.ADD_RESTAURANT_TABLE:
      return {
        ...state,
        tables: [...state.tables, action.payload],
        searchedTables: [...state.tables, action.payload]
      };
    case RestaurantTableActionsList.ADD_RESTAURANT_TABLES:
      return {
        ...state,
        tables: [...state.tables, ...action.payload],
        searchedTables: [...state.tables, ...action.payload]
      };
    case RestaurantTableActionsList.UPDATE_RESTAURANT_TABLE:
      const ingredient = state.tables[state.editedTableIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updatedIngredients = [...state.tables];
      updatedIngredients[state.editedTableIndex] = updatedIngredient;

      return {
        ...state,
        tables: updatedIngredients,
        searchedTables: updatedIngredients,
        editedTableIndex: -1,
        editedTable: new RestaurantTable('Apples', 5, 1)
      };
    case RestaurantTableActionsList.DELETE_RESTAURANT_TABLE:
      return {
        ...state,
        tables: state.tables.filter((ig, igIndex) => {
          return igIndex !== state.editedTableIndex;
        }),
        searchedTables: state.tables.filter((ig, igIndex) => {
          return igIndex !== state.editedTableIndex;
        }),
        editedTableIndex: -1,
        editedTable: new RestaurantTable('Apples', 5, 1)
      };
    case RestaurantTableActionsList.START_EDIT:
      return {
        ...state,
        editedTableIndex: action.payload,
        editedTable: { ...state.tables[action.payload] }
      };
    case RestaurantTableActionsList.STOP_EDIT:
      return {
        ...state,
        editedTable: new RestaurantTable('Apples', 5, 1),
        editedTableIndex: -1
      };
    default:
      return state;
  }
}
