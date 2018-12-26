import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarTableEditRowComponent } from './car-table-edit-row.component';

describe('CarTableEditRowComponent', () => {
  let component: CarTableEditRowComponent;
  let fixture: ComponentFixture<CarTableEditRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarTableEditRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarTableEditRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
