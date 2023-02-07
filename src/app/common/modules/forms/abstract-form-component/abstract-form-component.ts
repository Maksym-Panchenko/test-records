import {Component, Input} from "@angular/core";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {MatFormFieldAppearance} from "@angular/material/form-field";

@Component({
  template: ''
})
export abstract class AbstractFormComponent {
  @Input() control: AbstractControl = new FormControl();
  @Input() required: boolean = false;
  @Input() placeholder: string;
  @Input() appearance: MatFormFieldAppearance = 'outline';
  formGroup: FormGroup;

  get errorMessage(): string {
    switch (true) {
      case this.control.hasError('required'): return 'Value is required';
      case this.control.hasError('numbersOnly'): return 'Number only';
      default: return '';
    }
  }

  get isRequired(): boolean {
    const required: boolean = this.control.validator && this.control.validator(this.control)?.['required'];
    return required ?? this.required;
  }

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  getControl(...path: Array<string | number>): FormControl {
    return this.formGroup && (this.formGroup.get(path) as FormControl);
  }
}
