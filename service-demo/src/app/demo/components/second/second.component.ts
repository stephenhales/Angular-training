import { Component, OnInit } from '@angular/core';

import { WidgetsService } from '../../services/widgets.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  // providers: [ WidgetsService ],
})
export class SecondComponent implements OnInit {

  constructor(private ws: WidgetsService) { }

  ngOnInit() {
    this.ws.doIt();
  }

}
