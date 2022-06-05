
import { ReserveTableReponse } from '../models/reserve-table-reponse.model';
import { ReserveTable } from '../models/reserve-table.model';
import * as ReserveActions from './reserve-table.action';

export interface State {
  reservations: ReserveTable[];
  postResponse: ReserveTableReponse
}

const initialState: State = {
    reservations: [],
    postResponse: new ReserveTableReponse(0, '')
};

export function recipeReducer(
  state = initialState,
  action: ReserveActions.ReserveActions
) {
  switch (action.type) {
    case ReserveActions.SET_RESERVATION:
      return {
        ...state,
        reservations: [...action.payload]
      };
    case ReserveActions.ADD_RESERVATION:
      return {
        ...state,
        reservations: [...state.reservations, action.payload]
      };
    case ReserveActions.UPDATE_RESERVATION:
      const updatedReservation = {
        ...state.reservations[action.payload.index],
        ...action.payload.newResevation
      };

      const updatedResevations = [...state.reservations];
      updatedResevations[action.payload.index] = updatedReservation;

      return {
        ...state,
        reservations: updatedResevations
      };
    case ReserveActions.DELETE_RESERVATION:
      return {
        ...state,
        reservations: state.reservations.filter((recipe, index) => {
          return index !== action.payload;
        })
      };
    default:
      return state;
  }
}
