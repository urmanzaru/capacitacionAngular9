import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LogInComponent } from './login/log-in/log-in.component';
import { LoginGuard } from './services/guard/login.guard';
import { AdminGuard } from './services/guard/admin.guard';
import { CashierGuard } from './services/guard/cashier.guard';
import { WaiterGuard } from './services/guard/waiter.guard';

const routes: Routes = [
  {
    path: 'access',
    component: LoginComponent
  },
  {
    path: 'access/signup',
    component: SignUpComponent
  },
  {
    path: 'access/login',
    component: LogInComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
  },
  {
    path: '',
    component: NavigationComponent,
    canActivate:[LoginGuard],
    children:[
      {
        path:'admin',
        canActivate:[AdminGuard],
        loadChildren: ()=>import('./administrator/administrator.module').then(m=>m.AdministratorModule)
      },
      {
        path:'waiter',
        canActivate:[WaiterGuard],
        loadChildren:()=>import('./waiter/waiter.module').then(m=>m.WaiterModule)
      },
      {
        path:'cashier',
        canActivate:[CashierGuard],
        loadChildren:()=>import('./cashier/cashier.module').then(m=>m.CashierModule)
      }
    ]
  },
  {
    path: '**', redirectTo: 'access'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
