import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketsComponent } from './components/tickets/tickets.component';

const routes: Routes = [
  {
    path: 'tickets',
    component: TicketsComponent
  },
  {
    path: '**', redirectTo: 'cajero/tickets'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashierRoutingModule { }
