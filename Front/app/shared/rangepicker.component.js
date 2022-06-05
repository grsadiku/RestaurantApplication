import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

/** @title Date range picker forms integration */
@Component({
  selector: 'app-rangepicker',
  templateUrl: './rangepicker.html',
})
export class RangePicker {
  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });
}