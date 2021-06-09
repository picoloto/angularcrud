import {Confirmation} from 'primeng/api/confirmation';

export class ConfirmationUtils {

  /**
   * @param messagem  A ser adicionada no objeto Confirmation
   * @param retorno  A ser adicionada no objeto Confirmation
   * @returns Confirmation padrão
   */
  static getConfirmacaoPadrao(messagem: string, retorno: CallableFunction): Confirmation {
    return {
      header: 'Atenção',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      acceptButtonStyleClass: 'p-button-text',
      rejectLabel: 'Não',
      rejectButtonStyleClass: 'p-button-text',
      defaultFocus: 'none',
      message: messagem,
      accept: retorno,
    };
  }
}
