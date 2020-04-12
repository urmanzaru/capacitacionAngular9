import { CashierGuard } from './services/guards/cashier.guard';
import { WaiterGuard } from './services/guards/waiter.guard';
import { AdminGuard } from './services/guards/admin.guard';
import { LoginGuard } from './services/guards/login.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'access',
    component: LoginComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: 'exercise1',
    component: Exercice1Component
  },
  {
    path: '',
    component: NavigationComponent,
    canActivate: [LoginGuard], //guards
    children: [
      {
        path: 'admin',
        //cargar modulo administrador
        canActivate: [AdminGuard],
        loadChildren: ()=> import('./administrator/administrator.module').then(m=>m.AdministratorModule)
      },
      {
        path: 'mesero',
        //cargar modulo mesero
        canActivate: [WaiterGuard],
        loadChildren: ()=> import('./waiter/waiter.module').then(m=>m.WaiterModule)
      },
      {
        path: 'cajero',
        //cargar modulo cajero
        canActivate: [CashierGuard],
        loadChildren: ()=> import('./cashier/cashier.module').then(m=>m.CashierModule)
      }
    ]
  },
  {
    path: '**', redirectTo: '/access'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
