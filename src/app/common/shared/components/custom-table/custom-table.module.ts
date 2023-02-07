import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table.component';
import { MaterialModule } from "@shared/material/material.module";

@NgModule({
  declarations: [CustomTableComponent],
  imports: [CommonModule, MaterialModule],
  exports: [CustomTableComponent],
})
export class CustomTableModule { }
