import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'car home';

  cars = [
    { id: 0, make: 'nissan', model: 'versa', year: 2008, color: 'red', price: 15000},
    { id: 0, make: 'nissan', model: 'versa', year: 2008, color: 'red', price: 15000} 
  ];

  constructor() { }

  ngOnInit() {
  }

}
