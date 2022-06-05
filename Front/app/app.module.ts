import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestaurantTableListComponent } from './restaurant-table-list/restaurant-table-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatepickerMaterialModule } from './datepicker-material.module';
import { RouterModule, Routes } from '@angular/router';
import { ReserveTableComponent } from './reserve-table/reserve-table.component';
import { StoreModule } from '@ngrx/store';
import { restaurantTableListReducer } from './restaurant-table-list/store/restaurant-table-list.reducer';
import * as fromApp from './store/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { RestaurantTableEffects } from './restaurant-table-list/store/restaurant-table-list.effects';
import { RecipeEffects } from './reserve-table/store/reserve-table.effects';


const appRoutes: Routes = [
  {
    path: '', component: RestaurantTableListComponent
  },
  {
    path: 'reserve', component: ReserveTableComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableListComponent,
    ReserveTableComponent
  ],
  imports: [
    BrowserModule , HttpClientModule, BrowserAnimationsModule, DatepickerMaterialModule, 
    RouterModule.forRoot(appRoutes),
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([RestaurantTableEffects, RecipeEffects]),
    ReactiveFormsModule
    //StoreModule.forRoot({tableListStore: restaurantTableListReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
