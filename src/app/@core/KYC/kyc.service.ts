import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';

@Injectable({
  providedIn: 'root',
})
export class KYCService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  getPendingVerification(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/PendingVerifications', this.httpOptions );
  }
  getTraderInformation(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/TraderInformation/' + id, this.httpOptions );
  }

  getListApprove(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/Approve/' + id, this.httpOptions );
  }
}
