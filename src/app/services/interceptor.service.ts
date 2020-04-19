import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{


  constructor(private _userService:UserService) { }

  intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
    console.log('Se ejecutó el interceptor');
    if (this._userService.checkToken()){
      let cloned;
      cloned=req.clone({
        headers:req.headers.set('Authorization','Bearer ' + this._userService.access_token)
      });
      return next.handle(cloned);
    }
    return next.handle(req);
  }
}
