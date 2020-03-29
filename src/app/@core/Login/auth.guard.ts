import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthServiceService} from './auth-service.service';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthServiceService, public router: Router, public storageService: StorageService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/login');
      this.storageService.removeCaptchaToken();
      this.storageService.removeAccessRole();
      this.storageService.removeAccessToken();
      return false;
    }
    return true;
  }
  }


