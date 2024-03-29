import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {Trader} from './trader';
import {ReportsQuery} from '../Reports/reports-query';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TraderService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  mark = '';
  // ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  ServerUrl =  'https://devapi.didex.com/api/';
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
  searchGet(queryString: ReportsQuery): Observable<any> {
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
    } if (queryString.Status != null) {
      this.mark = '?';
      params = params.set('Status', String(queryString.Status));
    }
    const httpOption = {
      headers: new HttpHeaders({ 'accept': 'text/plain',
          'Authorization': 'Bearer ' + this.token,
        },
      ),
      params,
    };
    return this.http.get
    (this.ServerUrl + 'admin/Trader' + this.mark, httpOption );
  }
  verifyKycGet( id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/verifyKyc/' + id , this.httpOptions  );
  }
}
