import { RestaurantTable } from '../models/restaurant-table.model'; 
import * as ShoppingListActions from './shopping-list.action';

export interface State {
  ingredients: RestaurantTable[];
  editedIngredient: RestaurantTable;
  editedIngredientIndex: number;
}

const initialState: State = {
  ingredients: [new RestaurantTable('Apples', 5, 1), new RestaurantTable('Tomatoes', 10,1)],
  editedIngredient: new RestaurantTable('Apples', 5, 1),
  editedIngredientIndex: -1
};

export function shoppingListReducer(
  state: State = initialState,
  action: ShoppingListActions.ShoppingListActions
) : State {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload]
      };
    case ShoppingListActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload]
      };
    case ShoppingListActions.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {
        ...ingredient,
        ...action.payload
      };
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;

      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredientIndex: -1,
        editedIngredient: new RestaurantTable('Apples', 5, 1)
      };
    case ShoppingListActions.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editedIngredientIndex;
        }),
        editedIngredientIndex: -1,
        editedIngredient: new RestaurantTable('Apples', 5, 1)
      };
    case ShoppingListActions.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] }
      };
    case ShoppingListActions.STOP_EDIT:
      return {
        ...state,
        editedIngredient: new RestaurantTable('Apples', 5, 1),
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
