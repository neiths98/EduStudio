import { FormControl, ValidatorFn } from "@angular/forms";
import { emailValidator } from "./email.validator";
import { isNotEqualTo } from "./isNotEqualTo.validator";


export class AppValidators {

  static constants = {
    LENGTH_MAX_EMAIL:    128,
    LENGTH_MIN_PASSWORD: 4,
    LENGTH_MAX_PASSWORD: 40,
    LENGTH_MIN_PHONE:    14, // (xx) xxxx-xxxx
    LENGTH_MAX_PHONE:    15, // (xx) xxxx-xxxxx
    LENGTH_MAX_NAME:     50,
  };

  static emailPattern(): ValidatorFn {
    return emailValidator();
  }

  static isNotEqualTo(formControl: FormControl) {
    return isNotEqualTo(formControl);
  }

}