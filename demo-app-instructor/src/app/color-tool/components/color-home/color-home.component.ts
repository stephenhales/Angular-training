import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'color-home',
  templateUrl: './color-home.component.html',
  styleUrls: ['./color-home.component.css']
})
export class ColorHomeComponent implements OnInit {

  public headerText = 'Color Tool!';

  public colors = [ 'red', 'blue', 'green' ];

  ngOnInit() { }

  addColor(color: string) {
    this.colors = this.colors.concat(color);
  }
}
