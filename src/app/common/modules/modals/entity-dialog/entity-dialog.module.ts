import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityDialogComponent } from './entity-dialog.component';
import { MaterialModule } from "@shared/material/material.module";
import { CustomFormsModule } from "@forms/custom-forms.module";

@NgModule({
  declarations: [EntityDialogComponent],
  imports: [CommonModule, MaterialModule, CustomFormsModule],
  exports: [EntityDialogComponent]
})
export class EntityDialogModule { }
