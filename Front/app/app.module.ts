import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RestaurantTableListComponent } from './restaurant-table-list/restaurant-table-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DatepickerMaterialModule } from './datepicker-material.module';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantTableListComponent
  ],
  imports: [
    BrowserModule, FormsModule , HttpClientModule, BrowserAnimationsModule, DatepickerMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
