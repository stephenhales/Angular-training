import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Car } from '../../models/Car';

import { ViewCarRowComponent } from './view-car-row.component';

describe('ViewCarRowComponent', () => {
  let component: ViewCarRowComponent;
  let fixture: ComponentFixture<ViewCarRowComponent>;

  const car: Car = {
    id: 1,
    make: 'Ford',
    model: 'Focus',
    year: 1998,
    color: 'magenta',
    price: 2000,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCarRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCarRowComponent);
    component = fixture.componentInstance;
    component.car = car;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should populate table row with car', () => {

    const fields = [ 'id', 'make', 'model', 'year', 'color', 'price' ];

    const tdElements = fixture.debugElement.queryAll(By.css('td')).map(de => de.nativeElement).slice(0, fields.length);

    tdElements.forEach( (nel, index) => {
      expect(nel.innerText).toEqual(String(car[fields[index]]));
    });

  });

  it('should emit edit id when button clicked', () => {

    // const eventHandlers = {
    //   editCarHandler: () => { console.log('called'); },
    // };

    // const spy2 = spyOn(eventHandlers, 'editCarHandler').and.callThrough();
    // const spy3 = spyOn(eventHandlers, 'editCarHandler').and.returnValue('test');

    const spy = jasmine.createSpy('editCar');

    component.editCar.subscribe(carId => {
      expect(carId).toEqual(car.id);
      spy(carId);
    });

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(car.id);
  });
});
