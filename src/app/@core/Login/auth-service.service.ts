import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {LoginRestfulAPIService} from './login-restful-api.service';
import {Login} from './login';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(private storageService: StorageService, private loginRestfulAPIService: LoginRestfulAPIService,
              private toastrService: ToastrService,  private router: Router) {
  }

  loginPost(login: Login) {
    return this.loginRestfulAPIService.userLogin(login).subscribe(
      (res: any) => {
        this.storageService.setAccessToken(res.token);
        this.toastrService.success('You Have Successfully Login.', '', {timeOut: 4000});
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
        this.toastrService.error('Invalid Email Or Password.', '', {timeOut: 4000});
      },
    );
  }

  registerPost(login: Login) {
    return this.loginRestfulAPIService.userRegister(login).subscribe(
      (res: any) => {
        this.storageService.setAccessToken(res.token);
        this.toastrService.success('You Have Successfully Register.', '', {timeOut: 4000});
        this.router.navigate(['/dashboard']);
      },
      err => {
        console.log(err);
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 10000});
      },
    );
  }
  logOut() {
    this.storageService.removeAccessToken();
    this.toastrService.success('You Have Successfully Sign Out.', '', {timeOut: 4000});
    this.router.navigate(['/login']);
  }
  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    const token = this.storageService.getAccessToken();
    if (!token) { return false; }
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
}
