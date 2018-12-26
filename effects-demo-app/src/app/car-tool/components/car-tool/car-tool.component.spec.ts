import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarToolComponent } from './car-tool.component';

describe('CarToolComponent', () => {
  let component: CarToolComponent;
  let fixture: ComponentFixture<CarToolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarToolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
