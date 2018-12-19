import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

// TODO - move this to another class
const myRequired = (c: FormControl) => {
  if (c.value == null || String(c.value).length === 0) {
    return {
      myRequired: true,
    };
  }
};

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', { validators: [
        Validators.required,
        Validators.minLength(3)]}],
      lastName: ['', { validators: [
        myRequired,
        Validators.minLength(3)]}],
      phone: '',
      email: '',
    });
  }

}
