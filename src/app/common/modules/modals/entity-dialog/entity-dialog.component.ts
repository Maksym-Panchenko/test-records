import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IRecord } from "@models/interfaces/record.interface";
import { RecordService } from "@services/record/record.service";
import { IEntityModal } from "@models/interfaces/entity-modal.interface";
import { Status } from "@models/enums/status.enum";
import { IOption } from "@models/interfaces/select-option.interface";
import {CustomValidators} from "../../../../helpers/custom-validator";

@Component({
  selector: 'entity-dialog',
  templateUrl: './entity-dialog.component.html',
  styleUrls: ['./entity-dialog.component.scss']
})
export class EntityDialogComponent implements OnInit {
  formGroup: FormGroup;
  record: IRecord;
  statuses: IOption[] = Object.values(Status).map(e => ({value: e})).filter(e => e.value !== 'All');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IEntityModal,
    private _formBuilder: FormBuilder,
    private _record: RecordService,
    private _dialog: MatDialogRef<EntityDialogComponent>,
  ) {}

  ngOnInit(): void {
    this.formCreate();
  }

  formCreate(): void {
    this.formGroup = this._formBuilder.group({
      name: [this.data.record?.name || '', Validators.required],
      address: [this.data.record?.address || '', Validators.required],
      amount: [this.data.record?.amount || '', [Validators.required, CustomValidators.numbersOnly]],
      status: [this.data.record?.status || Status.open, Validators.required],
    });
  }

  submit(): void {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.invalid) {
      return;
    }

    const newRecord: IRecord = {
      id: this.data.record?.id || Date.now(),
      name: this.formGroup.controls.name.value,
      address: this.formGroup.controls.address.value,
      amount: this.formGroup.controls.amount.value,
      status: this.formGroup.controls.status.value,
      role: this.data.record?.role || this._record.currentRole
    }

    this._dialog.close(newRecord)
  }

  getControl(...path: Array<string | number>): FormControl {
    return this.formGroup && (this.formGroup.get(path) as FormControl);
  }
}
