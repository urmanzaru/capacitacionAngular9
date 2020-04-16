import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  exports:[MatInputModule,MatSelectModule,MatFormFieldModule,MatPaginatorModule,MatButtonModule,MatTableModule, MatIconModule, CommonModule]
})
export class AdministratorMaterialModule { }
