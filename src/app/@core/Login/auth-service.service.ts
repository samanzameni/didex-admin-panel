import { Injectable } from '@angular/core';
import {StorageService} from './storage.service';
import {LoginRestfulAPIService} from './login-restful-api.service';
import {Login} from './login';
import { JwtHelperService } from '@auth0/angular-jwt';
import {ToastrService} from 'ngx-toastr';
import { Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {

  constructor(private storageService: StorageService, private loginRestfulAPIService: LoginRestfulAPIService,
              private toastrService: ToastrService,  private router: Router, private ngxShowLoader: NgxSpinnerService) {
  }

  loginPost(login: Login) {
    this.ngxShowLoader.show();
    return this.loginRestfulAPIService.userLogin(login).subscribe(
      (res: any) => {
        this.storageService.setAccessToken(res.token);
        this.router.navigate(['pages/dashboard']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Login.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Wrong Email Or Password.', '', {timeOut: 10000});
      },
    );
  }

  registerPost(login: Login) {
    this.ngxShowLoader.show();
    return this.loginRestfulAPIService.userRegister(login).subscribe(
      (res: any) => {
        this.storageService.setAccessToken(res.token);
        this.router.navigate(['pages/dashboard']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Register.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 10000});
      },
    );
  }
  logOut() {
    this.ngxShowLoader.show();
    this.storageService.removeAccessToken();
    this.router.navigateByUrl('/login');
    this.ngxShowLoader.hide();
    this.toastrService.success('You Have Successfully Sign Out.', '', {timeOut: 4000});

  }
  public isAuthenticated(): boolean {
    const jwtHelper = new JwtHelperService();
    const token = this.storageService.getAccessToken();
    // Check whether there is a token and return
    // true or false
    if (!token) { return false; }
    // Check whether the token is expired and return
    // true or false
    return !jwtHelper.isTokenExpired(token);
  }
}
