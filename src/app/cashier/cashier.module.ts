import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashierRoutingModule } from './cashier-routing.module';
import { TicketsComponent } from './components/tickets/tickets.component';


@NgModule({
  declarations: [ TicketsComponent],
  imports: [
    CommonModule,
    CashierRoutingModule
  ]
})
export class CashierModule { }
