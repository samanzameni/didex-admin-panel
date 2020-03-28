import { Injectable } from '@angular/core';
import {CanActivate, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {StorageService} from './storage.service';
@Injectable({
  providedIn: 'root'
})
export class SuperUserGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router) {}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const expectedRole = 'superUser';
    const role = this.storageService.getAccessRole();
    for (const i of role) {
      if (i === expectedRole ) {
        return true;
      }
    }
    return false;
  }
}
