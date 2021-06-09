import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Funcionario} from "../model/funcionario";
import {ActivatedRoute, Router} from "@angular/router";
import {ConfirmationService, MessageService} from "primeng/api";
import {FuncionarioService} from "../service/funcionario.service";
import {ValidatorUtils} from "../../common/utils/validator-utils";
import {ConfirmationUtils} from "../../common/utils/confirmation-utils";
import {FormUtils} from "../../common/utils/form-utils";
import {MessageUtils} from "../../common/utils/message-utils";
import {ObjectUtils} from "../../common/utils/object-utils";
import {ErrorService} from "../service/error.service";

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.scss']
})
export class FuncionarioFormComponent implements OnInit {
  funcionarioForm: FormGroup;
  funcionario = new Funcionario();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private messageService: MessageService,
    private errorService: ErrorService,
    private confirmationService: ConfirmationService,
    private funcionarioService: FuncionarioService,
  ) {
    this.montaFormGroup();
  }

  ngOnInit() {
    const idFuncionario = this.route.snapshot.paramMap.get('id');
    if (!!idFuncionario) {
      this.funcionarioForm.disable();
      this.findFuncionarioById(Number(idFuncionario));
    }
  }

  onSalvarClick() {
    if (this.funcionarioForm.valid) {
      this.funcionarioForm.disable();
      const objectFuncionario = ObjectUtils.objectFromForm(this.funcionarioForm, this.funcionario);

      this.funcionarioService.saveFuncionario(objectFuncionario)
        .subscribe(r => {
          this.finishSave(r);
        }, error => {
          this.funcionarioForm.enable();
          this.errorService.handleError(error);
        });
    } else {
      FormUtils.markAsDirtyAllControls(this.funcionarioForm);
      this.messageService.add(
        MessageUtils.getMensagemAvisoPadrao('Existem inconsistências no seu cadastro.\nPor gentileza, verifique os campos destacados')
      );
    }
  }

  onCancelarClick() {
    if (!this.funcionarioForm.pristine) {
      this.confirmationService.confirm(
        ConfirmationUtils.getConfirmacaoPadrao(
          'Você realmente deseja cancelar?\n Esta ação não poderá ser desfeita',
          () => this.router.navigate(['/lista-funcionarios'])
        ));
    } else {
      this.router.navigate(['/lista-funcionarios']);
    }
  }

  private montaFormGroup() {
    this.funcionarioForm = this.formBuilder.group({
      nome: [null, [ValidatorUtils.validatorRequired, ValidatorUtils.validatorMinLength(2), ValidatorUtils.validatorMaxLength(30)]],
      sobrenome: [null, [ValidatorUtils.validatorRequired, ValidatorUtils.validatorMinLength(2), ValidatorUtils.validatorMaxLength(50)]],
      email: [null, [ValidatorUtils.validatorRequired, ValidatorUtils.validatorEmail]],
      numeroNis: [null, [ValidatorUtils.validatorRequired]],
    });
  }


  /**
   * @param id  Id do Funcionario a ser buscado
   */
  private findFuncionarioById(id: number) {
    this.funcionarioService.findFuncionarioById(id)
      .subscribe(r => {
        this.funcionario = ObjectUtils.clone(r);
        this.funcionarioForm.enable();
        FormUtils.formFromObject(this.funcionarioForm, this.funcionario);
      }, error => {
        this.messageService.add(MessageUtils.getMensagemErroPadrao(error));
        this.router.navigate(['/lista-funcionarios']);
      });
  }

  private finishSave(funcionario: Funcionario) {
    this.funcionarioForm.enable();
    this.funcionarioForm.reset();
    this.funcionario = funcionario;
    FormUtils.formFromObject(this.funcionarioForm, this.funcionario);

    this.messageService.add(MessageUtils.getMensagemSucessoPadrao('Funcionario salvo com sucesso'));
    this.router.navigate(['/funcionario', this.funcionario.id]);
  }
}
