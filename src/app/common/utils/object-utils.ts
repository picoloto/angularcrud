import {FormGroup} from '@angular/forms';

export class ObjectUtils {

  /**
   * @param form  FormGroup que contem os dados
   * @param object  Instancia do objeto a ser populado
   * @returns O objeto populado
   */
  static objectFromForm(form: FormGroup, object: any): any {
    Object.keys(form.controls).forEach(key => {
      object[key] = form.controls[key].value;
    });
    return object;
  }

  /**
   * @param object  Objeto a ser clonado
   * @returns O clone do objeto
   */
  public static clone(object: any): any {
    return JSON.parse(JSON.stringify(object));
  }
}
