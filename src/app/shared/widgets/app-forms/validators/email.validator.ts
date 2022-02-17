import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function emailValidator(): ValidatorFn {
  return (control: AbstractControl) : ValidationErrors | null => {
    const value:string = control.value;
    const EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]{2}([a-z0-9-]*[a-z0-9])?)+$/i;

    if (value && value !== '' && !EMAIL_REGEXP.test(value)) {
      return { emailPattern: true };
    }

    return null;
  };
}
