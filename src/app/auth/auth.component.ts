import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn:'root'
})
export class AuthGuard implements CanActivate {

  constructor (private service: AuthService, public router:Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if(!localStorage.getItem('token')){
      this.router.navigate(['signin']);
      return false;
    }
    this.service.authValidation();
    return true;
  }
}
