import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CampoVazioPipe} from './campo-vazio.pipe';

@NgModule({
  declarations: [CampoVazioPipe],
  imports: [
    CommonModule,
  ],
  exports: [CampoVazioPipe],
  providers: []
})
export class CampoVazioPipeModule {
}
