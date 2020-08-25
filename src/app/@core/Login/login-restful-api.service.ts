import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from './login';
import {StorageService} from './storage.service';
import {environment} from '../../../environments/environment';
import {Factor} from '../TwoFactor/factor';

@Injectable({
  providedIn: 'root',
})
export class LoginRestfulAPIService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getCaptchaToken();
   ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
   httpOptions = {
      headers: new HttpHeaders({'accept': 'text/plain',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      },
),
  };

  userLogin(formdata: Login ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'Account/login', formdata, { headers: new HttpHeaders({'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      }), observe: 'response' , withCredentials: true}  );
  }
  user2Fa(formdata: Factor ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'Account/twoFactorLogin', formdata, this.httpOptions  );
  }
  userRegister(formdata: Login ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'Account/register', formdata, this.httpOptions  );
  }

}

