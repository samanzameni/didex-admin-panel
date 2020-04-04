import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {ReportsQuery} from './reports-query';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsTransactionsService {
  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://devapi.didex.com/api/';
  mark = '';

  getReportsTransactions(queryString: ReportsQuery): Observable<any> {
    let params = new HttpParams();
    if (queryString.CurrencyShortName != null) {
      this.mark = '?';
      params = params.set('CurrencyShortName', String(queryString.CurrencyShortName));
    }
    if (queryString.TransactionId != null) {
      this.mark = '?';
      params = params.set('TransactionId', String(queryString.TransactionId));
    }
    if (queryString.TraderId != null) {
      this.mark = '?';
      params = params.set('TraderId', String(queryString.TraderId));
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
    (this.ServerUrl + 'admin/Reports/transactions' + this.mark, httpOptions );
  }
}
