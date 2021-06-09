import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'lista-funcionarios',
    loadChildren: () => import('./funcionario/list/funcionario-list.module').then(m => m.FuncionarioListModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./funcionario/form/funcionario-form.module').then(m => m.FuncionarioFormModule)
  },
  {
    path: 'funcionario/:id',
    loadChildren: () => import('./funcionario/form/funcionario-form.module').then(m => m.FuncionarioFormModule)
  },
  {
    path: '**',
    redirectTo: '/lista-funcionarios', pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
