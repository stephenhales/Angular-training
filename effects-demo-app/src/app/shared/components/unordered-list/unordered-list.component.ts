import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent implements OnInit {

  @Input()
  public items: string[] = [];

  constructor() { }

  ngOnInit() {
  }

}
