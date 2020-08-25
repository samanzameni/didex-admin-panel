import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Currency} from './currency';
import {StorageService} from '../Login/storage.service';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {

  constructor(private http: HttpClient, private storageService: StorageService) {
  }
  token = this.storageService.getAccessToken();
  // ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  ServerUrl =  'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
      'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  currencyPost(formdata: Currency ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'admin/Currency', formdata, this.httpOptions  );
  }
  currencyGet() {
    return this.http.get
    (this.ServerUrl + 'admin/Currency', this.httpOptions  );
  }
  shortNameGet(id: string): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Currency/' + id, this.httpOptions  );
  }
  shortNamePut(id: string , formdata: Currency ): Observable<any> {
    return this.http.put
    (this.ServerUrl + 'admin/Currency/' + id , formdata, this.httpOptions  );
  }
  shortNameDelete(id: string): Observable<any> {
    return this.http.delete
    (this.ServerUrl + 'admin/Currency/' + id, this.httpOptions  );
  }
}
