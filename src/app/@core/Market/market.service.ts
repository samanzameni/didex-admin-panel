import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../Login/storage.service';
import {MarketList} from './market-list';
import {MarketPut} from './market-put';

@Injectable({
  providedIn: 'root',
})
export class MarketService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
      'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  MarketPost(formData: MarketList ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'admin/Market', formData, this.httpOptions  );
  }
  MarketGet(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Market', this.httpOptions  );
  }
  symbolGet(id: string): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Market/' + id, this.httpOptions  );
  }
  symbolPut(id: string , formData: MarketPut ): Observable<any> {
    return this.http.put
    (this.ServerUrl + 'admin/Market/' + id , formData, this.httpOptions  );
  }
  symbolDelete(id: string): Observable<any> {
    return this.http.delete
    (this.ServerUrl + 'admin/Market/' + id, this.httpOptions  );
  }
}
