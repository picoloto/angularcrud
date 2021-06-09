import {ErrorHandler, Injectable} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {MessageService} from "primeng/api";


@Injectable()
export class ErrorService implements ErrorHandler {
  tipoGrow: string;
  tituloGrow: string;
  mensagemGrow: string;

  constructor(
    private messageService: MessageService,
  ) {
  }


  handleError(error: Error | HttpErrorResponse) {
    this.clearGrowl();
    if (error instanceof HttpErrorResponse) {
      if (!navigator.onLine) {
        // Navegador offline
        this.tipoGrow = 'error';
        this.tituloGrow = 'Falha na conexão com a internet';
        this.mensagemGrow = 'Por gentileza, verifique sua conexão.';
      } else if (error.status === 400) {
        // (error.status === 400)
        this.tipoGrow = 'error';
        this.tituloGrow = 'Ocorreu um erro';
        this.mensagemGrow = this.getErrorMessages(error);
      } else if (error.status === 404) {
        // (error.status === 404)
        this.tipoGrow = 'error';
        this.tituloGrow = 'Registro não encontrado';
        this.mensagemGrow = error.error;
      } else if (error.status === 500) {
        // (error.status === 500)
        this.tipoGrow = 'error';
        this.tituloGrow = 'Falha na API';
        this.mensagemGrow = error.error.message;
      } else {
        // (error.status === 403...)
        this.tipoGrow = 'error';
        this.tituloGrow = 'Falha na conexão com o servidor';
        this.mensagemGrow = 'Tente novamente mais tarde.';
      }
    } else {
      // Outros erros
      this.tipoGrow = 'error';
      this.tituloGrow = 'Falha inesperada';
      this.mensagemGrow = 'Tente novamente mais tarde.';
    }

    // Exibe mensagem de erro
    this.clearGrowl();
    return this.showGrowl(this.tipoGrow, this.tituloGrow, this.mensagemGrow);
  }

  showGrowl(tipo: string, titulo: string, mensagem: string) {
    this.messageService.add({severity: tipo, summary: titulo, detail: mensagem});
  }

  clearGrowl() {
    this.messageService.clear();
  }

  /**
   * @param error  Erro retornado pela API
   * @returns Confirmation padrão
   */
  getErrorMessages(error: any): string {
    if (error?.error?.errors?.length == 0) {
      return 'Erro inesperado';
    } else {
      let errors: string = '';
      error.error.errors.forEach((e: any) => {
        errors += e.defaultMessage + '\n';
      });
      return errors;
    }
  }

}
