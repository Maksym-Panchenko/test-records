import {AbstractControl, ValidationErrors} from "@angular/forms";

export class CustomValidators {
  static numbersOnly({ value }: AbstractControl): ValidationErrors | null {
    const valid: boolean = /^[0-9]+(\.[0-9]+)?$/g.test(value);

    return valid || value === '' ? null : { numbersOnly: { valid: false, value } };
  }
}
