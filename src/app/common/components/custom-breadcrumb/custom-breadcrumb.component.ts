import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html',
  styleUrls: ['./custom-breadcrumb.component.scss']
})
export class CustomBreadcrumbComponent implements OnInit {

  breadcrumbFuncionarios: MenuItem[];
  @Output() listaFuncionariosClick = new EventEmitter();

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.montaFuncionariosBreadcrumb();
  }

  private montaFuncionariosBreadcrumb() {
    this.breadcrumbFuncionarios = [
      {label: 'Lista de Funcionários', style: {cursor: 'pointer'}, command: () => this.listaFuncionariosClick.emit()},
    ];
    if (this.router.url !== '/lista-funcionarios') {
      this.breadcrumbFuncionarios.push({label: 'Cadastro de funcionário', routerLink: '/funcionario'});
    }
  }
}
