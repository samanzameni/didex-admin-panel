import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {Trader} from './trader';

@Injectable({
  providedIn: 'root',
})
export class TraderService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://api.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  traderGet(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader', this.httpOptions  );
  }
  traderPatch(id: number , formData: Trader ): Observable<any> {
    return this.http.patch
    (this.ServerUrl + 'admin/Trader/' + id + '/ChangeStatus', formData, this.httpOptions  );
  }
}
