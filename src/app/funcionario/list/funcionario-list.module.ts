import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FuncionarioListRoutingModule} from './funcionario-list-routing.module';
import {FuncionarioListComponent} from './funcionario-list.component';
import {CardModule} from 'primeng/card';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FuncionarioService} from '../service/funcionario.service';
import {CustomBreadcrumbModule} from '../../common/components/custom-breadcrumb/custom-breadcrumb.module';
import {RippleModule} from 'primeng/ripple';
import {ActionBarModule} from '../../common/components/action-bar/action-bar.module';
import {ProgressBarModule} from 'primeng/progressbar';
import {CustomProgressBarModule} from '../../common/components/custom-progress-bar/custom-progress-bar.module';
import {CustomProgressTextModule} from '../../common/components/custom-progress-text/custom-progress-text.module';
import {CampoVazioPipeModule} from '../../common/pipes/campo-vazio/campo-vazio.pipe.module';

@NgModule({
  declarations: [FuncionarioListComponent],
  imports: [
    CommonModule,
    FuncionarioListRoutingModule,
    CardModule,
    TableModule,
    ButtonModule,
    CustomBreadcrumbModule,
    RippleModule,
    ActionBarModule,
    ProgressBarModule,
    CustomProgressBarModule,
    CustomProgressTextModule,
    CampoVazioPipeModule,
  ],
  providers: [FuncionarioService]
})
export class FuncionarioListModule {
}
