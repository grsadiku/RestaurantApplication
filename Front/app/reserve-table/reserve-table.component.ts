
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import * as ReserveTableActions from './store/reserve-table.action';
import { RestaurantTable } from '../restaurant-table-list/models/restaurant-table.model';

@Component({
  selector: 'app-reserve-table',
  templateUrl: './reserve-table.component.html',
  styleUrls: ['./reserve-table.component.css']
})
export class ReserveTableComponent implements OnInit {

  id: number;
  editMode = false;
  reservationForm: FormGroup;
  showTableError: boolean = false;
  showDateError: boolean = false;

  tablesList: Observable<{ tables: RestaurantTable[] }>;

  private storeSub: Subscription;

  constructor( private route: ActivatedRoute, private router: Router, private store: Store<fromApp.AppState>) { }

  
  ngOnInit(): void {
    this.tablesList = this.store.select('tableListData');
    let idTable = '';
    let date = '';
    this.reservationForm = new FormGroup({
      idTable: new FormControl(idTable, Validators.required),
      date: new FormControl(date, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.reservationForm.value);
    var data = this.reservationForm.value;

    if(data.idTable == '')
      this.showTableError= true;

    if(data.date == '')
      this.showDateError = true;

    if(this.showTableError || this.showDateError)
      return;

    var result = this.store.dispatch(
      new ReserveTableActions.NewResevation(this.reservationForm.value)
    );
    console.log(result)
    //this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
