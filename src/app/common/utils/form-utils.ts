import {FormGroup} from '@angular/forms';

export class FormUtils {

  /**
   * @param form  FormGroup a ter seus controls setados como Dirty
   */
  static markAsDirtyAllControls(form: FormGroup): void {
    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsDirty();
    });
  }

  /**
   * @param form  FormGroup a ser populado
   * @param object  Objeto que contem os dados
   */
  static formFromObject(form: FormGroup, object: any): void {
    Object.keys(object).forEach(key => {
      if (key.includes('data') && !!object[key]) {
        const newDate = new Date(object[key]);
        newDate.setHours(0, 0, 0, 0);
        form.controls[key].setValue(newDate);
      } else if (key !== 'id') {
        form.controls[key].setValue(object[key]);
      }
    });
  }
}
