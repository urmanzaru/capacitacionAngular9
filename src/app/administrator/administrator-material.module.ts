import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  exports: [MatButtonModule, MatTableModule, MatPaginatorModule, MatIconModule, MatFormFieldModule,
     MatInputModule, MatSelectModule]
})
export class AdministratorMaterialModule { }
