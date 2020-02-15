import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StorageService} from '../Login/storage.service';
import {AdminChild} from './admin-child';


@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://118.190.58.246/api/';
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
}
