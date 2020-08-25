import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  // ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  ServerUrl =  'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  AccountGet(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/bankAccount', this.httpOptions  );
  }
  ConfirmGet(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/bankAccount/' + id + '/confirm', this.httpOptions  );
  }
}
