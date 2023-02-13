import {Injectable} from '@angular/core';
import {IRecord} from "@models/interfaces/record.interface";
import records from '@mock/records'
import {Subject} from "rxjs";
import {Role} from "@models/enums/role.enum";
import {Status} from "@models/enums/status.enum";

export type Filter = {
  name: string;
  status: Status;
  roles: Role[];
}

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  updateRecords$: Subject<void> = new Subject();
  updateRole$: Subject<void> = new Subject();
  filters: Filter = {
    name: '',
    status: Status.all,
    roles: []
  }
  allRecords: IRecord[] = [];
  currentRole: Role = Role.customer;

  loadItems(): IRecord[] {
    // check data in localStorage
    const localItems: string | null = localStorage.getItem('records');

    if (localItems) {
      this.allRecords = JSON.parse(localItems);
    } else {
      this.allRecords = records;
      this.saveItems();
    }

    return this.getItems();
  }

  saveItems(): void {
    localStorage.setItem('records', JSON.stringify(this.allRecords));
  }

  getItems(): IRecord[] {
    return this.allRecords
      .filter(e => e.name.toLowerCase().includes(this.filters.name.toLowerCase()))
      .filter(e => e.status === this.filters.status || this.filters.status === 'All')
      .filter(e => this.filters.roles.length === 0 ? true : this.filters.roles.some(i => i === e.role));
  }

  getItem(id: number): IRecord {
    return this.allRecords.find(e => e.id === id)!;
  }

  addItem(newItem: IRecord): void {
    this.allRecords = [...this.allRecords, newItem];
    this.saveItems();
    this.updateRecords$.next();
  }

  updateItem(newItem: IRecord): void {
    const index: number = this.allRecords.findIndex(e => e.id === newItem.id);
    this.allRecords.splice(index, 1, newItem);
    this.saveItems();
    this.updateRecords$.next();
  }

  deleteItem(id: number): void {
    if (window.confirm('Delete this Record?')) {
      this.allRecords = this.allRecords.filter(e => e.id !== id);
      this.saveItems();
      this.updateRecords$.next();
    }
  }

  updateFilter(param: Filter): void {
    this.filters = param
    this.updateRecords$.next();
  }

  setRole(newRole: Role): void {
    this.currentRole = newRole;
    this.updateRole$.next();
  }
}
