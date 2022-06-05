import { Injectable } from "@angular/core";
import { RestaurantTable, } from './restaurant-table.model';
import { RestaurantTablePost } from './restaurant-table-post.model';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class RestaurantTableService{

    constructor(private http: HttpClient){}

    createTable(location: string, totalSeats: number){
        const tableData: RestaurantTablePost = {location: location, totalSeats: totalSeats};
        this.http.post('', tableData)
        .subscribe(responseData => {
            console.log(responseData);
        })
    }

     fetchTables(){
        return this.http.get<RestaurantTable[]>('https://localhost:44308/api/RestaurantTable/GetTables')
        .pipe(
          map(responseData => {
            const newArray = [];
            for(const key in responseData){
              if(responseData.hasOwnProperty(key)){
                newArray.push({...responseData[key] as RestaurantTable});
              }
            }
            return newArray;
          })
        )
      }
}