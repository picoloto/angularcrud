import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BreadcrumbModule} from 'primeng/breadcrumb';
import {InputContainerComponent} from './input-container.component';

@NgModule({
  declarations: [InputContainerComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    InputContainerComponent
  ],
  providers: []
})
export class InputContainerModule {
}
