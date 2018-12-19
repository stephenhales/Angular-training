import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
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
    component.car = mockCar;
    fixture.detectChanges();
  });

  const mockCar = {
    id: 0,
    make: 'Ford',
    model: 'Focus',
    year: 2008,
    color: 'black',
    price: 14000,
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('id td has car.id', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[0].innerText).toBeTruthy(mockCar.id);
  });

  it('make td has car.make', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[1].innerText).toEqual(mockCar.make);

  });

  it('model td has car.model', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[2].innerText).toEqual(mockCar.model);
  });

  it('year td has car.year', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[3].innerText).toBeTruthy(mockCar.year);
  });

  it('color td has car.color', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[4].innerText).toEqual(mockCar.color);
  });

  it('price td has car.price', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[5].innerText).toBeTruthy(mockCar.price);
  });

});
