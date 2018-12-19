import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EditCarRowComponent } from './edit-car-row.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('EditCarRowComponent', () => {
  let component: EditCarRowComponent;
  let fixture: ComponentFixture<EditCarRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ EditCarRowComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarRowComponent);
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

  const newCar = {
    make: 'Nissan',
    model: 'Versa',
    year: 2016,
    color: 'white',
    price: 12000,
  };

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should update form on input event', () => {

    const newValue = 'Nissan';
    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.value = newValue;
    input.dispatchEvent(new Event('input'));

    expect(component.editCarForm.value.make).toEqual(newValue);
  });

  it('should update the form on input event', () => {
    const fields = ['make', 'model', 'year', 'color', 'price'];

    const inputElements = fixture.debugElement.queryAll(By.css('input'))
      .map(input => input.nativeElement)
      .slice(0, fields.length);

    inputElements.forEach((nel, index) => {
      nel.value = newCar[fields[index]];
      nel.dispatchEvent(new Event('input'));

      expect(component.editCarForm.value[fields[index]])
        .toEqual(newCar[fields[index]]);
    });
  });

  xit('should emit an updated car on save', () => {
    // make sure that updateCar is emitted
    const spy = jasmine.createSpy('updateCar');

    component.updateCar.subscribe(car => {
      car.forEach(nel => {
        expect(nel.value).toEqual(mockCar[nel.key]);
      });
      spy(newCar);
    });

    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    button.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(mockCar);
  });
});
