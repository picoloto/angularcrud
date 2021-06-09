import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FuncionarioFormRoutingModule} from './funcionario-form-routing.module';
import {CustomBreadcrumbModule} from '../../common/components/custom-breadcrumb/custom-breadcrumb.module';
import {CardModule} from 'primeng/card';
import {ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {NgxMaskModule} from 'ngx-mask';
import {NgxCurrencyModule} from 'ngx-currency';
import {CheckboxModule} from 'primeng/checkbox';
import {CalendarModule} from 'primeng/calendar';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {ActionBarModule} from '../../common/components/action-bar/action-bar.module';
import {FuncionarioService} from '../service/funcionario.service';
import {ProgressBarModule} from 'primeng/progressbar';
import {CustomProgressBarModule} from '../../common/components/custom-progress-bar/custom-progress-bar.module';
import {InputContainerModule} from '../../common/components/input-container/input-container.module';
import {AutoFocusDirectiveModule} from '../../common/directives/auto-focus/auto-focus.directive.module';
import {FuncionarioFormComponent} from "./funcionario-form.component";

@NgModule({
  declarations: [FuncionarioFormComponent],
  providers: [FuncionarioService],
  imports: [
    CommonModule,
    FuncionarioFormRoutingModule,
    CustomBreadcrumbModule,
    ReactiveFormsModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    NgxCurrencyModule,
    NgxMaskModule.forRoot(),
    CheckboxModule,
    CalendarModule,
    MessageModule,
    MessagesModule,
    ActionBarModule,
    ProgressBarModule,
    CustomProgressBarModule,
    InputContainerModule,
    AutoFocusDirectiveModule,
  ]
})
export class FuncionarioFormModule {
}
