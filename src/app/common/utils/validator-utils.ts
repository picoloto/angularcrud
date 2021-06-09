import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class ValidatorUtils {

  /**
   * @param formControl  FormControl a ser validado
   * @returns ValidationErrors com a validação
   */
  static validatorRequired(formControl: FormControl): ValidationErrors {
    return !formControl.value ? {error: 'Campo obrigatório'} : null as any;
  }

  /**
   * @param formControl  FormControl a ser validado
   * @returns ValidationErrors com a validação
   */
  static validatorEmail(formControl: FormControl): ValidationErrors {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isInvalid = formControl.value && !re.test(String(formControl.value).toLowerCase());
    return isInvalid ? {error: 'Email inválido'} : null as any;
  }

  /**
   * @param length  Length a ser validado
   * @returns ValidatorFn com a validação
   */
  static validatorMaxLength(length: number): ValidatorFn {
    return (abstractControl: AbstractControl): { [key: string]: any } | null => {
      const isInvalid = abstractControl.value?.length > length;
      return isInvalid ? {error: `Tamanho máximo de ${length} caracteres`} : null;
    };
  }

  /**
   * @param length  Length a ser validado
   * @returns ValidatorFn com a validação
   */
  static validatorMinLength(length: number): ValidatorFn {
    return (abstractControl: AbstractControl): { [key: string]: any } | null => {
      const isInvalid = abstractControl.value?.length < length;
      return isInvalid ? {error: `Tamanho mínimo de ${length} caracteres`} : null;
    };
  }
}
