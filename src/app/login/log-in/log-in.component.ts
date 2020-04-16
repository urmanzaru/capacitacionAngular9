import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  formLogin:FormGroup;

  constructor(private router:Router, public userService:UserService,private _fb:FormBuilder,private _router: Router) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm(){
    this.formLogin=this._fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    });
  }

  loginn(){
    this.router.navigate(['access']);
  }

  sendLogin(){
    this.userService.login(this.formLogin.value).subscribe((resp:any)=>{
      if (resp){
        console.log('login success');
        if(this.userService.isAdmin()) this._router.navigateByUrl('/admin/products');
        if(this.userService.isCashier()) this._router.navigateByUrl('/cashier/tickets');
        if(this.userService.isWaiter()) this._router.navigateByUrl('/waiter/menu');
      }
    },(error)=>{
      console.log('Error login');
    });
  }

}
