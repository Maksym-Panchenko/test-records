import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { IOption } from '@models/interfaces/select-option.interface';
import { FormControl } from "@angular/forms";
import { AbstractFormComponent } from "@forms/abstract-form-component/abstract-form-component";

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent extends AbstractFormComponent {
  @Output() selectionChange: EventEmitter<any> = new EventEmitter();
  @Input() options: IOption[];
  @Input() isTitleCase: boolean;
  @Input() triggerTemplate: TemplateRef<any>;
  @Input() optionTemplate: TemplateRef<any>;
  @Input() panelClass: string = '';
  @Input() centering: boolean = false;
  @Input() getValue: (item: any) => any = item => item.value;
  @Input() override control: FormControl = new FormControl();
  @Input() multiple: boolean = false;

  getTitle(item: IOption): string {
    return `${item.label || item.value}`;
  }

  change(event: MatSelectChange): void {
    this.selectionChange.emit(event.value);
  }
}
