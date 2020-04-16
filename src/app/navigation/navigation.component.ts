import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(public userService : UserService) { }

  ngOnInit(): void {
  }
//funcion que manda a llamar el servicio de logout
logout(){
  this.userService.logout();
}

}
