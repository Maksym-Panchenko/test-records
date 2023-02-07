import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomHeaderComponent } from './custom-header.component';
import {CustomFormsModule} from "@forms/custom-forms.module";

@NgModule({
  declarations: [CustomHeaderComponent],
  imports: [CommonModule, CustomFormsModule],
  exports: [CustomHeaderComponent]
})
export class CustomHeaderModule { }
