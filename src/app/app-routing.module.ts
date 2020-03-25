import { Exercice1Component } from './exercices/exercice1/exercice1.component';
import { NavigationComponent } from './navigation/navigation.component';
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
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: 'exercise1',
    component: Exercice1Component
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
