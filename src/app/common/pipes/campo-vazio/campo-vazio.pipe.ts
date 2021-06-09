import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'campoVazio'
})
export class CampoVazioPipe implements PipeTransform {

  /**
   * @param value  A ser verificado para transformação
   * @returns String processada e transformada conforme value
   */
  transform(value: any): string {
    return !!value ? value.toString() : '-';
  }

}
