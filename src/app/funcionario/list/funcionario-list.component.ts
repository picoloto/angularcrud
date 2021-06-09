import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {Funcionario} from "../model/funcionario";
import {Subscription} from "rxjs";
import {FuncionarioService} from "../service/funcionario.service";
import {ConfirmationService, MessageService} from "primeng/api";
import {ConfirmationUtils} from "../../common/utils/confirmation-utils";
import {MessageUtils} from "../../common/utils/message-utils";

@Component({
  selector: 'app-funcionario-list',
  templateUrl: './funcionario-list.component.html',
  styleUrls: ['./funcionario-list.component.scss']
})
export class FuncionarioListComponent implements AfterViewInit, OnDestroy {
  funcionarios: Funcionario[] = [];
  loading: boolean;
  getFuncionarios$ = new Subscription();
  setFuncionarios$ = new Subscription();

  constructor(private cdr: ChangeDetectorRef,
              private funcionarioService: FuncionarioService,
              private messageService: MessageService,
              private confirmationService: ConfirmationService) {
  }

  ngAfterViewInit() {
    this.loading = true;
    this.cdr.detectChanges();
  }

  onLazyLoad(): void {
    this.getFuncionarios$ = this.funcionarioService.findFuncionarios()
      .subscribe(funcionariosResult => {
        this.funcionarios = [...funcionariosResult];
        setTimeout(() => {
          this.loading = false;
        });
      }, error => {
        this.messageService.add(MessageUtils.getMensagemErroPadrao(error));
        this.loading = false;
      });
  }

  /**
   * @param funcionario  Funcionario a ser removido
   */
  removeFuncionarioClick(funcionario: Funcionario) {
    this.confirmationService.confirm(ConfirmationUtils.getConfirmacaoPadrao(
      'Você realmente deseja excluir esse funcionário?\n Esta ação não poderá ser desfeita',
      () => this.removeFuncionario(funcionario)
    ));
  }

  ngOnDestroy() {
    this.getFuncionarios$.unsubscribe();
    this.setFuncionarios$.unsubscribe();
  }

  /**
   * @param funcionario  Funcionario a ser removido
   */
  private removeFuncionario(funcionario: Funcionario) {
    this.loading = true;
    const novosFuncionarios = this.funcionarios.filter(i => i.id !== funcionario.id);
    this.setFuncionarios$ = this.funcionarioService.deleteFuncionario(funcionario.id)
      .subscribe(() => {
        this.funcionarios = novosFuncionarios;
        this.messageService.add(MessageUtils.getMensagemSucessoPadrao('Funcionario excluído com sucesso'));
        this.loading = false;
      }, error => {
        this.messageService.add(MessageUtils.getMensagemErroPadrao(error));
        this.onLazyLoad();
        this.loading = false;
      });
  }
}
