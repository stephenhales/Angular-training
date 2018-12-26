import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { ContactFormComponent, MyRequiredDirective } from './components/contact-form/contact-form.component';
import { NameInputComponent } from './components/name-input/name-input.component';

@NgModule({
  declarations: [
    ToolHeaderComponent, MyUppercasePipe, MyAppendPipe,
    ContactFormComponent, MyRequiredDirective, NameInputComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
  ],
  exports: [
    ToolHeaderComponent, MyUppercasePipe, MyAppendPipe,
    ContactFormComponent,
  ],
})
export class SharedModule { }
