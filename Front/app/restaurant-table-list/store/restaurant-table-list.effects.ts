import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects'
import { map, switchMap } from 'rxjs/operators';
import { RestaurantTableService } from '../service/restaurant-table.service';
import * as RestaurantTableActionsList from "./restaurant-table-list.action";
import { RestaurantTable } from '../models/restaurant-table.model';

@Injectable()
export class RestaurantTableEffects{
    constructor(
        private actions$: Actions,
        private http: HttpClient,
        private tableService: RestaurantTableService
        ) {}

        
//  @Effect()
//   getTables = this.actions$.pipe(
//     ofType(RestaurantTableActionsList.GET_TABLES),
//     switchMap((tableAction: RestaurantTableActionsList.GetTablesSuccess) => {
//       return this.http.get<RestaurantTable[]>('https://localhost:44308/api/RestaurantTable/GetTables')
//       .pipe(
//         map(responseData => {
//           const newArray = [];
//           for(const key in responseData){
//             if(responseData.hasOwnProperty(key)){
//               newArray.push({...responseData[key] as RestaurantTable});
//             }
//           }
//           return newArray;
//         })
//       )
//     })
//   );

  @Effect()
  fetchRecipes = this.actions$.pipe(
    ofType(RestaurantTableActionsList.FETCH_TABLES),
    switchMap(() => {
      return this.http.get<RestaurantTable[]>(
        'https://localhost:44308/api/RestaurantTable/GetTables'
      );
    }),
    map(recipes => {
      return recipes.map(table => {
        return {
          ...table,
          tables: table ? table : []
        };
      });
    }),
    map(tables => {
      return new RestaurantTableActionsList.SetTables(tables);
    })
  );
}