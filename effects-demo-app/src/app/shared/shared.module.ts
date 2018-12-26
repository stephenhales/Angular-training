import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnorderedListComponent } from './components/unordered-list/unordered-list.component';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUpperCasePipe } from './pipes/my-upper-case.pipe';
import { EllipsisPipe } from './pipes/ellipsis.pipe';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [UnorderedListComponent, ToolHeaderComponent, MyUpperCasePipe, EllipsisPipe],
  exports: [UnorderedListComponent, ToolHeaderComponent, MyUpperCasePipe, EllipsisPipe],
})
export class SharedModule { }
