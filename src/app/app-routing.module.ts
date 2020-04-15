import { NavigationComponent } from './navigation/navigation.component';
import { PracticeComponent } from './practice/practice.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { LogInComponent } from './login/log-in/log-in.component';

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
    path: 'nav',
    component: NavigationComponent
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
