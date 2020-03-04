import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from './login';
import {StorageService} from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class LoginRestfulAPIService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
   ServerUrl = 'https://api.didex.com/api/';
   httpOptions = {
    headers: new HttpHeaders({'accept': 'text/plain',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + this.token,
      },
    ),
  };

  userLogin(formdata: Login ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'Account/login', formdata, this.httpOptions  );
  }
  userRegister(formdata: Login ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'Account/register', formdata, this.httpOptions  );
  }

}

