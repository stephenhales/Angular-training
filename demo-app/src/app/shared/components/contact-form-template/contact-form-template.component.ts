import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form-template',
  templateUrl: './contact-form-template.component.html',
  styleUrls: ['./contact-form-template.component.css']
})
export class ContactFormTemplateComponent implements OnInit {

  person = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  };

  ngOnInit() {
  }

}
