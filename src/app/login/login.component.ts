import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(public userService: UserService, private _fb:FormBuilder, private _router: Router) {
    console.log('contructor loginComponent');
   }

  ngOnInit(): void {
    console.log('ngOnInit loginComponent');
    this.initForm();
  }

  initForm(){
    this.formLogin = this._fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  sendLogin(){
    // call service
    this.userService.login(this.formLogin.value).subscribe((resp:any)=>{
      if(resp){
        console.log('Paso login');
        // Navegar de acuerdo el rol
        if(this.userService.isAdmin()) {this._router.navigateByUrl('/admin');}
        if(this.userService.isWaiter()) {this._router.navigateByUrl('/mesero');}
        if(this.userService.isCashier()) {this._router.navigateByUrl('/cajero');}
      }
    }, (error)=>{
      console.log('Error en login');
    });
  }

}