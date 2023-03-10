import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from "@angular/material/select";

@NgModule({
  exports: [
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class MaterialModule {}
