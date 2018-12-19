import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormTemplateComponent } from './contact-form-template.component';

describe('ContactFormTemplateComponent', () => {
  let component: ContactFormTemplateComponent;
  let fixture: ComponentFixture<ContactFormTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
