import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { CustomFieldModule } from "@forms/custom-field/custom-field.module";
import {MaterialModule} from "@shared/material/material.module";
import {CustomFormsModule} from "@forms/custom-forms.module";

@NgModule({
  declarations: [FilterComponent],
  imports: [CommonModule, CustomFormsModule, MaterialModule],
  exports: [FilterComponent]
})
export class FilterModule {}
