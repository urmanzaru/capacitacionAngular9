import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Exercise1Component} from './exercises/exercise1/exercise1.component';
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
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: 'exercises',
    component: Exercise1Component
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
