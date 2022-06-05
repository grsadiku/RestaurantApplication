import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, withLatestFrom, tap, catchError } from 'rxjs/operators';

import * as ReserveActions from './reserve-table.action';
import { ReserveTable } from '../models/reserve-table.model';
import * as fromApp from '../../store/app.reducer';

@Injectable()
export class RecipeEffects {

  @Effect({dispatch: false})
  storeRecipes = this.actions$.pipe(
    ofType(ReserveActions.STORE_RESERVATION),
    withLatestFrom(this.store.select('reservationData')),
    switchMap(([actionData, reservationState]) => {
      return this.http.post(
        'https://localhost:44308/api/TableReservation/AddReservations',
        reservationState.reservations
      );
    })
  );

  @Effect()
  authSignup = this.actions$.pipe(
    ofType(ReserveActions.NEW_RESERVATION),
    switchMap((reserveAction: ReserveActions.NewResevation) => {
      return this.http
        .post<ReserveTable>(
          'https://localhost:44308/api/TableReservation/AddReservations',
          {
            IDTable: reserveAction.payload.idTable,
            Date: reserveAction.payload.date
          }
        )
        .pipe(
          tap(resData => {
            
          }),
          map(resData => {
            return resData;
          }),
          catchError(errorRes => {
            return errorRes;
          })
        );
    })
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private store: Store<fromApp.AppState>
  ) {}
}
