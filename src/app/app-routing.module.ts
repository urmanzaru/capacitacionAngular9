import { PracticeComponent } from './practice/practice.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'access',
    component: LoginComponent
  },
  {
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: 'practice',
    component: PracticeComponent
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
