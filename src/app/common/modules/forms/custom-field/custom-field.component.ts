import {Component, EventEmitter, Output} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {AbstractFormComponent} from "@forms/abstract-form-component/abstract-form-component";

export interface IFormControls {
  [key: string]: AbstractControl;
}

@Component({
  selector: 'custom-field',
  templateUrl: './custom-field.component.html',
  styleUrls: ['./custom-field.component.scss']
})
export class CustomFieldComponent extends AbstractFormComponent {
  @Output() controlBlur: EventEmitter<any> = new EventEmitter<any>();

  get form(): IFormControls {
    return this.formGroup?.controls;
  }

  blur(): void {
    this.controlBlur.emit(this.control.value);
  }
}
