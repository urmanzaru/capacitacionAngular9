import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  formLogin: FormGroup;

  constructor(public userService : UserService, private _fb:FormBuilder, private _router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm (){
    this.formLogin = this._fb.group({
      username:['', Validators.required],
      password:['', Validators.required]
    })
  }

  sendLogin(){
    this.userService.login(this.formLogin.value).subscribe((resp:any)=>{
      if(resp){
        console.log('Sesión iniciada.');
        //navegar a rol
        if(this.userService.isAdmin()) this._router.navigateByUrl('/admin');
        if(this.userService.isWaiter()) this._router.navigateByUrl('/mesero');
        if(this.userService.isCashier()) this._router.navigateByUrl('/cajero');

      }
    },(error)=>{
      console.log('Error al iniciar sesión');

    });
  }
}
