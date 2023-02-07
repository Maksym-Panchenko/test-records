import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomFieldComponent } from './custom-field.component';
import { MaterialModule } from "@shared/material/material.module";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CustomFieldComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [CustomFieldComponent]
})
export class CustomFieldModule { }
