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

  constructor(public userService : UserService, private router: Router, private _fb:FormBuilder) { }

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

      }
    },(error)=>{
      console.log('error');

    },
    ()=> this.navigate()
    );

  }
  navigate(){
    this.router.navigateByUrl('/allproducts');
  }


}
