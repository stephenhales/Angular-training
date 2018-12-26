import { Component, OnInit, InjectionToken, Inject } from '@angular/core';

const WidgetsToken = new InjectionToken('Widgets');

import { WidgetsService, IWidgetsService } from '../../services/widgets.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  providers: [
    { provide: WidgetsToken, useClass: WidgetsService },
  ]
})
export class FirstComponent implements OnInit {

  constructor(@Inject(WidgetsToken) private ws: IWidgetsService) { }

  ngOnInit() {
    this.ws.doIt();
  }

}
