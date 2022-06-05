import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RestaurantTable } from './models/restaurant-table.model';

import { RestaurantTableService } from './service/restaurant-table.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as TableListActions from './store/restaurant-table-list.action';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-table-list',
  templateUrl: './restaurant-table-list.component.html',
  styleUrls: ['./restaurant-table-list.component.css']
})
export class RestaurantTableListComponent implements OnInit {
  tablesList: Observable<{ tables: RestaurantTable[], searchedTables: RestaurantTable[] }>;
  private subscription: Subscription;
  
  size: number;
  dateFrom: Date;
  dateTo: Date;
  // tables: RestaurantTable[] = [];
  // tablesToShow: RestaurantTable[] = [];
  //tables: RestaurantTable[] = [new RestaurantTable("test", 123, 1), new RestaurantTable( 'test 2', 222, 2), new RestaurantTable('test 3', 234, 3)];

  constructor(private http: HttpClient, private tableService: RestaurantTableService,   private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    // this.tableService.fetchTables().subscribe(data => {
    //   this.tables = data;
    //   this.tablesToShow = data;
    // });
    this.store.dispatch(new TableListActions.FetchTables());
    this.tablesList = this.store.select('tableListData');
    console.log(this.tablesList);
    //let data = this.store.select('tableListData');
 
  }

  public SearchClicked(){
    console.log(this.size);
    this.store.dispatch(new TableListActions.SearchTables({size: this.size}));
    this.tablesList = this.store.select('tableListData');
    // if(this.size > 0)
    // {
    //  this.tablesToShow = this.tables.filter((table) => table.totalSeats == this.size);
    // }else{
    //   this.tablesToShow = this.tables;
    // }
  }
}
