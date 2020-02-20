import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../Login/storage.service';
import {ReportsQuery} from './reports-query';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://didex.com/api/';

  getReports(queryString: ReportsQuery): Observable<any> {
    let params = new HttpParams();
    if (queryString.TraderId != null) {
      params = params.set('TraderId', String(queryString.TraderId));
    }  if (queryString.Symbol != null) {
      params = params.set('Symbol', String(queryString.Symbol));
    }  if (queryString.Desc != null) {
      params = params.set('Desc', String(queryString.Desc));
    }  if (queryString.FilterBy != null) {
      params = params.set('FilterBy', String(queryString.FilterBy));
    }  if (queryString.From != null) {
      params = params.set('From', String(queryString.From));
    }  if (queryString.Till != null) {
      params = params.set('Till', String(queryString.Till));
    }  if (queryString.Offset != null) {
      params = params.set('Offset', String(queryString.Offset));
    }  if (queryString.Limit != null) {
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
    (this.ServerUrl + 'admin/Reports/Orders?' , httpOptions );
  }
}
