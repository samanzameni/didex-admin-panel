import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {KycReject} from './kyc-reject';
import {ReportsQuery} from '../Reports/reports-query';
import {Trader} from '../Trader/trader';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class KYCService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  mark = '';
  ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  getPendingVerification(queryString: ReportsQuery): Observable<any> {
    let params = new HttpParams();
    if (queryString.UserId != null) {
      this.mark = '?';
      params = params.set('UserId', String(queryString.UserId));
    }  if (queryString.Offset != null) {
      this.mark = '?';
      params = params.set('Offset', String(queryString.Offset));
    }  if (queryString.Limit != null) {
      this.mark = '?';
      params = params.set('Limit', String(queryString.Limit));
    } if (queryString.Desc != null) {
      this.mark = '?';
      params = params.set('Desc', String(queryString.Desc));
    }
    const httpOption = {
      headers: new HttpHeaders({ 'accept': 'text/plain',
          'Authorization': 'Bearer ' + this.token,
        },
      ),
      params,
    };
    return this.http.get
    (this.ServerUrl + 'admin/Trader/PendingVerifications' + this.mark, httpOption );
  }
  getTraderInformation(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/TraderInformation/' + id, this.httpOptions );
  }
  getListApprove(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/Approve/' + id, this.httpOptions );
  }
  postListReject(id: number , formData: KycReject): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'admin/Trader/Reject/' + id, formData , this.httpOptions );
  }
  getTraderStatusHistory(queryString: ReportsQuery): Observable<any> {
    let params = new HttpParams();
    if (queryString.Offset != null) {
      this.mark = '?';
      params = params.set('Offset', String(queryString.Offset));
    }  if (queryString.Limit != null) {
      this.mark = '?';
      params = params.set('Limit', String(queryString.Limit));
    } if (queryString.Desc != null) {
      this.mark = '?';
      params = params.set('Desc', String(queryString.Desc));
    }
    const httpOption = {
      headers: new HttpHeaders({ 'accept': 'text/plain',
          'Authorization': 'Bearer ' + this.token,
        },
      ),
      params,
    };
    return this.http.get
    (this.ServerUrl + 'admin/Trader/TraderStatusHistory/' + queryString.TraderId + this.mark, httpOption );
  }
}
