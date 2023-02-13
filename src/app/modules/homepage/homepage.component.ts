import { Component, OnInit } from '@angular/core';
import {IRecord} from "@models/interfaces/record.interface";
import {RecordService} from "@services/record/record.service";
import {MatDialog} from "@angular/material/dialog";
import {EntityDialogComponent} from "@modals/entity-dialog/entity-dialog.component";
import {IEntityModal} from "@models/interfaces/entity-modal.interface";
import {Role} from "@models/enums/role.enum";

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  records: IRecord[];
  currentRole: Role = this._record.currentRole;

  constructor(private _record: RecordService, private _dialog: MatDialog) {
    this._record.updateRecords$.subscribe(() => this.records = this._record.getItems());
    this._record.updateRole$.subscribe(() => this.currentRole = this._record.currentRole);
  }

  ngOnInit(): void {
    this.records = this._record.loadItems();
  }

  createRecord(): void {
    this._dialog
      .open(EntityDialogComponent, {
        autoFocus: false,
        disableClose: true,
        data: {
          title: 'Add new record',
        } as IEntityModal
      })
      .afterClosed()
      .subscribe((newRecord): void => {
        if (newRecord) {
          this._record.addItem(newRecord);
        }
      });
  }

  editRecord(id: number) {
    this._dialog
      .open(EntityDialogComponent, {
        autoFocus: false,
        disableClose: true,
        data: {
          title: 'Edit record',
          record: this._record.getItem(id)
        } as IEntityModal
      })
      .afterClosed()
      .subscribe((editedRecord): void => {
        if (editedRecord) {
          this._record.updateItem(editedRecord);
        }
      });
  }
}
