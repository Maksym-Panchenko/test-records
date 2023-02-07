import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { CustomHeaderModule } from "@layouts/custom-header/custom-header.module";
import {SharedModule} from "@shared/shared.module";
import {FilterModule} from "@layouts/filter/filter.module";
import {ModalsModule} from "@modals/modals.module";

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, CustomHeaderModule, SharedModule, FilterModule, ModalsModule],
  exports: [HomepageComponent]
})
export class HomepageModule {}
