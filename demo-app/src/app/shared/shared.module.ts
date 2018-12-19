import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { EllipsisAppendPipe } from './pipes/ellipsis-append.pipe';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactFormTemplateComponent } from './components/contact-form-template/contact-form-template.component';
import { NameInputComponent } from './components/name-input/name-input.component';

@NgModule({
  declarations: [
    ToolHeaderComponent, MyUppercasePipe, MyAppendPipe, EllipsisAppendPipe, ContactFormComponent, ContactFormTemplateComponent, NameInputComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
  ],
  exports: [
    ToolHeaderComponent, MyUppercasePipe, MyAppendPipe, EllipsisAppendPipe, ContactFormComponent, ContactFormTemplateComponent
  ]
})
export class SharedModule { }
