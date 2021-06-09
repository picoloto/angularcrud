import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ActionBarComponent} from './action-bar.component';
import {BreadcrumbModule} from 'primeng/breadcrumb';

@NgModule({
  declarations: [ActionBarComponent],
  imports: [
    CommonModule,
    BreadcrumbModule
  ],
  exports: [
    ActionBarComponent
  ],
  providers: []
})
export class ActionBarModule {
}
