import { NgModule } from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  exports:[MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule
  ]
})
export class AdministratorMaterialModule { }
