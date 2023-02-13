import { Component, OnInit } from '@angular/core';
import { IOption} from "@models/interfaces/select-option.interface";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Role } from "@models/enums/role.enum";
import { Status } from "@models/enums/status.enum";
import { Filter, RecordService } from "@services/record/record.service";

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  formGroup: FormGroup;

  statuses: IOption[] = [];
  roles: IOption[] = [];

  constructor(private _fb: FormBuilder, private _record: RecordService) {}

  ngOnInit(): void {
    this.statuses = Object.values(Status).map(e => ({value: e}));
    this.roles = Object.values(Role).map(e => ({value: e}));

    this.formGroup = this._fb.group({
      name: this._fb.control(''),
      status: this._fb.control(Status.all),
      role: this._fb.control([]),
    })
  }

  getControl(...path: Array<string | number>): FormControl {
    return this.formGroup && (this.formGroup.get(path) as FormControl);
  }

  updateForm(): void {
    const controls = this.formGroup.controls;
    this._record.updateFilter({
      name: controls.name.value,
      status: controls.status.value as Status,
      roles: controls.role.value as Role[]
    } as Filter);
  }

  reset(): void {
    const controls = this.formGroup.controls;

    controls.name.setValue('');
    controls.status.setValue(Status.all);
    controls.role.setValue([]);

    this.updateForm();
  }
}
