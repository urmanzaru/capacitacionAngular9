import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public userServie:UserService) { }
  ngOnInit(): void {
  }

  logOut(){
    this.userServie.logOut();
  }

}
