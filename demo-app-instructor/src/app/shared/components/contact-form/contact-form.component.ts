import { Component, OnInit, Directive, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,
  FormControl, NG_VALIDATORS, NgForm } from '@angular/forms';

const myRequired = (c: FormControl) => {

  if (c.value == null || String(c.value).length === 0) {
    return {
      myRequired: true,
    };
  }

  return null;
};

@Directive({
  selector: '[myRequired]',
  providers: [ { provide: NG_VALIDATORS, multi: true, useValue: myRequired }],
})
export class MyRequiredDirective { }


@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit, AfterViewInit {

  @ViewChild(NgForm)
  public contactForm: NgForm;

  person = {
    name: 'Bob Smith',
    phone: '',
    email: '',
  };

  ageInput = new FormControl(18);

  ngAfterViewInit(): void {
    console.log(this.contactForm);
  }
 

  // contactForm: FormGroup;

  // constructor(private fb: FormBuilder) { }

  ngOnInit() {
  //   this.contactForm = this.fb.group({
  //     firstName: ['', { validators: [
  //       myRequired,
  //       Validators.minLength(3)
  //     ] } ],
  //     lastName: '',
  //     phone: '',
  //     email: '',
  //   });
  }

}
