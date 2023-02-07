import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomFieldModule } from "@forms/custom-field/custom-field.module";
import { CustomSelectModule } from "@forms/custom-select/custom-select.module";

@NgModule({
  exports: [
    FormsModule,
    ReactiveFormsModule,
    CustomFieldModule,
    CustomSelectModule
  ]
})
export class CustomFormsModule {}
