import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from './storage.service';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router, private toastrService: ToastrService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = 'superUser';
    const expectedRole1 = 'moderator';
    const role = this.storageService.getAccessRole();
    if (role !== null) {
    for (const i of role) {
      if (i === expectedRole || i === expectedRole1 ) {
        this.toastrService.success('You Have Successfully Login.', '', {timeOut: 4000});
        return true;
      }
    }
    this.toastrService.error('You Dont Have Privilege To Login In This Site.', '', {timeOut: 4000});
    this.storageService.removeAccessToken();
    this.storageService.removeAccessRole();
    return false;
    }
  }
}
