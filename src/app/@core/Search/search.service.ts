import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  searchGet(query: string): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Trader/Search/' + query, this.httpOptions  );
  }
}
