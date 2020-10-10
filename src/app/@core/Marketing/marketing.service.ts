import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {Observable} from 'rxjs';
import {AddUserPromotion} from './add-user-promotion';
import {Setting} from './setting';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MarketingService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  // ServerUrl = environment.production ? 'https://api.didex.com/api/' : 'https://devapi.didex.com/api/';
  ServerUrl =  'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  promotionGet(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Promotion', this.httpOptions  );
  }
  promotionIDGet(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/Promotion/' + id + '/user', this.httpOptions  );
  }
  promotionIDPost(id: number , formData: AddUserPromotion ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'admin/Promotion/' + id + '/addUser', formData, this.httpOptions  );
  }
  settingGet(): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/SystemSetting/firstPage', this.httpOptions  );
  }
  settingPut(formData: Setting ): Observable<any> {
    return this.http.put
    (this.ServerUrl + 'admin/SystemSetting/firstpage' , formData, this.httpOptions  );
  }
}
