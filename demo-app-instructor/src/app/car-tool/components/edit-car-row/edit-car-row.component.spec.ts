import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { EditCarRowComponent } from './edit-car-row.component';

import { Car } from '../../models/Car';

describe('EditCarRowComponent', () => {
  let component: EditCarRowComponent;
  let fixture: ComponentFixture<EditCarRowComponent>;

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
      imports: [ReactiveFormsModule],
      declarations: [ EditCarRowComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCarRowComponent);
    component = fixture.componentInstance;
    component.car = car;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should output the modified car', () => {

    const input = fixture.debugElement.query(By.css('input')).nativeElement;

    input.value = 'Chevrolet';
    input.dispatchEvent(new Event('input'));

    expect(component.editCarForm.value.make).toEqual('Chevrolet');


  });
});
