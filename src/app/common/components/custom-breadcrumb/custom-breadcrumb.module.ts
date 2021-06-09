import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomBreadcrumbComponent} from './custom-breadcrumb.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [CustomBreadcrumbComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    CustomBreadcrumbComponent
  ],
  providers: []
})
export class CustomBreadcrumbModule {
}
