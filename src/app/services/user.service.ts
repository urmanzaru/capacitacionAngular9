import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { map } from "rxjs/internal/operators/map";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  jwt:any;

  constructor( private _http: HttpClient, private _router: Router) {
    this.getOfStorage();
  }

  login(body:any){
return this._http.post(environment.server + 'login', body).pipe(map((resp:any)=>{
  if(resp){
    this.jwt = resp;
    this.uploadToStorage();
    return this.jwt;
  }
}))
  }

  getOfStorage(){
    this.jwt = JSON.parse(localStorage.getItem('jwt_resbar'));
  }

  uploadToStorage(){
    localStorage.setItem('jwt_resbar', JSON.stringify(this.jwt));
  }



  createProduct(){
    return this._http.get(environment.server + 'allproducts')

  }

  checkToken(){
    if(this.jwt){
      return true;
    }
    return false;
  }
// cerrar sesión
logout(){
  this.jwt = null;
  localStorage.removeItem('jwt_resbar');
  this._router.navigateByUrl('/access');
}


  // Obtiene nombre de usuario
  get username(){
    return this.jwt.username;
  }

  get access_token(){
  return  this.jwt.access_token;
  }
// login de acuerdo al rol

isAdmin(){
  for(let r of this.jwt.roles){
    if(r === 'ROLE_ADMIN') return true;
  }
  return false;
}

isWaiter(){
  for(let r of this.jwt.roles){
    if(r === 'ROLE_MESERO') return true;
  }
  return false;
}

isCashier(){
  for(let r of this.jwt.roles){
    if(r === 'ROLE_CAJERO') return true;
  }
  return false;
}




}
