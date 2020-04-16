import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  exports:[MatPaginatorModule,MatButtonModule,MatTableModule, MatIconModule]
})
export class AdministratorMaterialModule { }
