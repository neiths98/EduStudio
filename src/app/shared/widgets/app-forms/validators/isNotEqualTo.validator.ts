import { AbstractControl, FormControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";


export function isNotEqualTo(formControl: FormControl): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (value?.length != 0 &&  formControl.value != value) {
      return { isNotEqual: true };
    }
    return null;
  };
}