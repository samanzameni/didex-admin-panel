import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from '../Login/storage.service';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class TwoFactorGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const step = this.storageService.getLoginStep();
    if (step === '2fa') {
      return true;
  } else {
      this.router.navigateByUrl('/login');
      return false;
    }}
}
