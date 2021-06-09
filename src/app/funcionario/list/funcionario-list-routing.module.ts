import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {FuncionarioListComponent} from './funcionario-list.component';

const routes: Routes = [{path: '', component: FuncionarioListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioListRoutingModule {
}
