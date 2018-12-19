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

  it('should populare table row with car', () => {

    const fields = ['id', 'make', 'model', 'year', 'color', 'price'];

    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement)
      .slice(0, fields.length);

    tdElements.forEach((nel, index) => {
      expect(nel.innerText).toEqual(String(mockCar[fields[index]]));
    });
  });

  xit('id td has car.id', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[0].innerText).toBeTruthy(mockCar.id);
  });

  xit('make td has car.make', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[1].innerText).toEqual(mockCar.make);

  });

  xit('model td has car.model', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[2].innerText).toEqual(mockCar.model);
  });

  xit('year td has car.year', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[3].innerText).toBeTruthy(mockCar.year);
  });

  xit('color td has car.color', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[4].innerText).toEqual(mockCar.color);
  });

  xit('price td has car.price', () => {
    const tdElements = fixture.debugElement
      .queryAll(By.css('td'))
      .map(td => td.nativeElement);

    expect(tdElements[5].innerText).toBeTruthy(mockCar.price);
  });

  it('should emit edit id when button clicked', () => {

    component.editCar.subscribe(carId => {
      expect(carId).toEqual(mockCar.id);
    });

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.dispatchEvent(new Event('click'));
  });

});
