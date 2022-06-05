import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTableListComponent } from './restaurant-table-list.component';

describe('RestaurantTableListComponent', () => {
  let component: RestaurantTableListComponent;
  let fixture: ComponentFixture<RestaurantTableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantTableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
