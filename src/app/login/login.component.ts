import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() {
    console.log('contructor loginComponent');
   }

  ngOnInit(): void {
    console.log('ngOnInit loginComponent');
  }

}
