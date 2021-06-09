import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomProgressTextComponent} from './custom-progress-text.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [CustomProgressTextComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ProgressBarModule
  ],
  exports: [
    CustomProgressTextComponent
  ],
  providers: []
})
export class CustomProgressTextModule {
}
