import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { RestaurantTable } from './restaurant-table.model';

import { RestaurantTableService } from './restaurant-table.service';

@Component({
  selector: 'app-restaurant-table-list',
  templateUrl: './restaurant-table-list.component.html',
  styleUrls: ['./restaurant-table-list.component.css']
})
export class RestaurantTableListComponent implements OnInit {

  size: number = 0;
  dateFrom: Date = new Date;
  dateTo: Date = new Date;
  tables: RestaurantTable[] = [];
  tablesToShow: RestaurantTable[] = [];
  //tables: RestaurantTable[] = [new RestaurantTable("test", 123, 1), new RestaurantTable( 'test 2', 222, 2), new RestaurantTable('test 3', 234, 3)];

  constructor(private http: HttpClient, private tableService: RestaurantTableService) { }

  ngOnInit(): void {
    this.tableService.fetchTables().subscribe(data => {
      this.tables = data;
      this.tablesToShow = data;
    });
  }

  public SearchClicked(){
    console.log(this.size);
    if(this.size > 0)
    {
     this.tablesToShow = this.tables.filter((table) => table.totalSeats == this.size);
    }else{
      this.tablesToShow = this.tables;
    }
  }
}
