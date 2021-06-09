import {Message} from 'primeng/api/message';

export class MessageUtils {

  /**
   * @param mensagem  A ser adicionada no objecto Message
   * @returns Message de erro padrão
   */
  static getMensagemErroPadrao(mensagem: any): Message {
    return {
      severity: 'error',
      summary: 'Atenção',
      detail: mensagem,
      life: 4000
    };
  }

  /**
   * @param mensagem  A ser adicionada no objeto Message
   * @returns Message de sucesso padrão
   */
  static getMensagemSucessoPadrao(mensagem: string): Message {
    return {
      severity: 'success',
      summary: 'Sucesso',
      detail: mensagem,
      life: 4000
    };
  }

  /**
   * @param mensagem  A ser adicionada no objeto Message
   * @returns Message de aviso padrão
   */
  static getMensagemAvisoPadrao(mensagem: string): Message {
    return {
      severity: 'warn',
      summary: 'Atenção',
      detail: mensagem,
      life: 4000
    };
  }

}
