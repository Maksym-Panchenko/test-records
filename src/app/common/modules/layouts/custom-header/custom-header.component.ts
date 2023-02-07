import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {IOption} from "@models/interfaces/select-option.interface";
import {Role} from "@models/enums/role.enum";
import {RecordService} from "@services/record/record.service";

@Component({
  selector: 'custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.scss']
})
export class CustomHeaderComponent implements OnInit {
  control: FormControl = new FormControl();
  roles: IOption[] = Object.values(Role).map(e => ({value: e}));

  constructor(private _record: RecordService) { }

  ngOnInit(): void {
    this.control.setValue(this._record.currentRole);
  }

  changeRole(newRole: Role): void {
    this._record.setRole(newRole);
  }

}
