import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCarRowComponent } from './view-car-row.component';

describe('ViewCarRowComponent', () => {
  let component: ViewCarRowComponent;
  let fixture: ComponentFixture<ViewCarRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
