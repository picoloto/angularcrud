import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomProgressBarComponent} from './custom-progress-bar.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ProgressBarModule} from 'primeng/progressbar';

@NgModule({
  declarations: [CustomProgressBarComponent],
  imports: [
    CommonModule,
    BreadcrumbModule,
    ProgressBarModule
  ],
  exports: [
    CustomProgressBarComponent
  ],
  providers: []
})
export class CustomProgressBarModule {
}
