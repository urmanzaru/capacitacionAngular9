import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
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

  constructor(public userService : UserService, private _fb:FormBuilder, private router: Router) { }

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

      }
    },(error)=>{
      console.log('Error al iniciar sesión');

    },
    () => this.navigate()
    );

  }
  navigate() {
    this.router.navigateByUrl('/product');
}
}
