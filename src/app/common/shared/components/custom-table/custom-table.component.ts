import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IRecord} from '@models/interfaces/record.interface';
import {RecordService} from "@services/record/record.service";
import {Role} from "@models/enums/role.enum";

@Component({
  selector: 'custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnInit {
  @Output() editItem: EventEmitter<number> = new EventEmitter();
  @Input() data: IRecord[] = [];
  @Input() currentRole: Role;
  displayedColumns: string[] = ['name', 'address', 'amount', 'actions'];

  constructor(private _record: RecordService) {}

  ngOnInit(): void {
  }

  editRecord(id: number): void {
    this.editItem.emit(id);
  }

  deleteRecord(id: number): void {
    this._record.deleteItem(id);
  }

  isCanEdit(role: Role): boolean {
    return this.currentRole === role || this.currentRole === Role.admin;
  }
}
