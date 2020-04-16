import { Component, OnInit } from '@angular/core';
import { UserService } from "./../services/user.service";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { error } from '@angular/compiler/src/util';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

formLogin: FormGroup;

  constructor(public userService : UserService, private router: Router, private _fb:FormBuilder, private _router: Router) { }

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
        console.log('paso login');
        // Navegar de acuerdo al rol
        if(this.userService.isAdmin()) this._router.navigateByUrl('/admin');
        if(this.userService.isCashier()) this._router.navigateByUrl('/cajero');
        if(this.userService.isWaiter()) this._router.navigateByUrl('/mesero');

      }
    },(error)=>{
      console.log('error');

    },

    );

  }



}
