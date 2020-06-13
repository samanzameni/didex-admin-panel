import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../Login/storage.service';
import {AdminChild} from './admin-child';
import {ReportsQuery} from '../Reports/reports-query';


@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  mark = '';
  ServerUrl = 'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
      'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  getRoles(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Users/roles', this.httpOptions );
  }
  getList(role: string): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Users/' + role, this.httpOptions );
  }
  addPatch( formdata: AdminChild ): Observable<any> {
    return this.http.patch
    (this.ServerUrl + 'admin/Users/AddToRole' , formdata, this.httpOptions );
  }
  removePatch( formdata: AdminChild ): Observable<any> {
    return this.http.patch
    (this.ServerUrl + 'admin/Users/RemoveFromRole' , formdata, this.httpOptions );
  }
  resetPatch( formdata: AdminChild ): Observable<any> {
    return this.http.patch
    (this.ServerUrl + 'admin/Users/resetPassword' , formdata, this.httpOptions );
  }
  searchGet(queryString: ReportsQuery): Observable<any> {
    let params = new HttpParams();
    if (queryString.UserId != null) {
      this.mark = '?';
      params = params.set('UserId', String(queryString.UserId));
    }   if (queryString.Desc != null) {
      this.mark = '?';
      params = params.set('Desc', String(queryString.Desc));
    } if (queryString.Offset != null) {
      this.mark = '?';
      params = params.set('Offset', String(queryString.Offset));
    }  if (queryString.Limit != null) {
      this.mark = '?';
      params = params.set('Limit', String(queryString.Limit));
    }
    const httpOption = {
      headers: new HttpHeaders({ 'accept': 'text/plain',
          'Authorization': 'Bearer ' + this.token,
        },
      ),
      params,
    };
    return this.http.get
    (this.ServerUrl + 'admin/Users' + this.mark, httpOption );
  }
}
