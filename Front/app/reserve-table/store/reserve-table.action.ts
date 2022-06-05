import { Action } from '@ngrx/store';
import { ReserveTableReponse } from '../models/reserve-table-reponse.model';

import { ReserveTable } from '../models/reserve-table.model';

export const SET_RESERVATION = '[Reserve Table] Set Resevation';
export const FETCH_RESERVATION = '[Reserve Table] Fetch Resevation';
export const ADD_RESERVATION = '[Reserve Table] Add Resevation';
export const UPDATE_RESERVATION = '[Reserve Table] Update Resevation';
export const DELETE_RESERVATION = '[Reserve Table] Delete Resevation';
export const STORE_RESERVATION = '[Reserve Table] Store Resevation';
export const NEW_RESERVATION = '[Reserve Table] New Resevation';
export const NEW_RESERVATION_FINISH = '[Reserve Table] New Resevation Finish';

export class SetResevation implements Action {
  readonly type = SET_RESERVATION;

  constructor(public payload: ReserveTable[]) {}
}

export class FetchResevation implements Action {
  readonly type = FETCH_RESERVATION;
}

export class AddResevation implements Action {
  readonly type = ADD_RESERVATION;

  constructor(public payload: ReserveTable) {}
}

export class UpdateResevation implements Action {
  readonly type = UPDATE_RESERVATION;

  constructor(public payload: { index: number; newResevation: ReserveTable }) {}
}

export class DeleteResevation implements Action {
  readonly type = DELETE_RESERVATION;

  constructor(public payload: number) {}
}

export class StoreResevation implements Action {
  readonly type = STORE_RESERVATION;

  constructor(public payload: ReserveTable) {}
}

export class NewResevation implements Action {
  readonly type = NEW_RESERVATION;

  constructor(public payload: ReserveTable) {}
}

export class NewResevationFinish implements Action {
  readonly type = NEW_RESERVATION_FINISH;

  constructor(public payload: ReserveTableReponse) {}
}

export type ReserveActions =
   SetResevation
  | FetchResevation
  | AddResevation
  | UpdateResevation
  | DeleteResevation
  | StoreResevation
  | NewResevation;
