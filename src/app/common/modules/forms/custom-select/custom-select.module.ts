import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomSelectComponent } from './custom-select.component';
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [CustomSelectComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, MatInputModule],
  exports: [CustomSelectComponent]
})
export class CustomSelectModule {}
