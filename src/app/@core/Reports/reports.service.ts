import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../Login/storage.service';
import {ReportsQuery} from './reports-query';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  mark = '';

  getReports(queryString: ReportsQuery): Observable<any> {
    let params = new HttpParams();
    if (queryString.TraderId != null) {
      this.mark = '?';
      params = params.set('TraderId', String(queryString.TraderId));
    }  if (queryString.Symbol != null) {
      this.mark = '?';
      params = params.set('Symbol', String(queryString.Symbol));
    }  if (queryString.Desc != null) {
      this.mark = '?';
      params = params.set('Desc', String(queryString.Desc));
    }  if (queryString.FilterBy != null) {
      this.mark = '?';
      params = params.set('FilterBy', String(queryString.FilterBy));
    }  if (queryString.From != null) {
      this.mark = '?';
      params = params.set('From', String(queryString.From));
    }  if (queryString.Till != null) {
      this.mark = '?';
      params = params.set('Till', String(queryString.Till));
    }  if (queryString.Offset != null) {
      this.mark = '?';
      params = params.set('Offset', String(queryString.Offset));
    }  if (queryString.Limit != null) {
      this.mark = '?';
      params = params.set('Limit', String(queryString.Limit));
    }
    const httpOptions = {
      headers: new HttpHeaders({ 'accept': 'text/plain',
          'Authorization': 'Bearer ' + this.token,
        },
      ),
      params,
    };
    return this.http.get
    (this.ServerUrl + 'admin/Reports/Orders' + this.mark, httpOptions );
  }
}
