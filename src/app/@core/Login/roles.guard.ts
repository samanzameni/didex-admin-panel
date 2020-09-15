import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from './storage.service';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router,
              private toastrService: ToastrService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = 'superUser';
    const expectedRole1 = 'moderator';
    const expectedRole2 = 'marketingManager';
    const role = this.storageService.getAccessRole();
    if (role !== null) {
    for (const i of role) {
      if (i === expectedRole || i === expectedRole1 || i === expectedRole2 ) {
        this.toastrService.success('You Have Successfully Signed In.', '', {timeOut: 4000});
        return true;
      }
    }
    this.toastrService.error('You Dont Have Privilege To Sign In This Site.', '', {timeOut: 4000});
    this.storageService.removeAccessToken();
    this.storageService.removeAccessRole();
    this.storageService.removeCaptchaToken();
    this.router.navigateByUrl('/login');
    return false;
    }
    this.router.navigateByUrl('/login');
    this.storageService.removeAccessToken();
    this.storageService.removeCaptchaToken();
    return false;
  }
}
