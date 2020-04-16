import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: '**',
    redirectTo: '/mesero/menu'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaiterRoutingModule { }
