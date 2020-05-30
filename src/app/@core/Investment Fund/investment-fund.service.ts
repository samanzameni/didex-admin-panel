import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StorageService} from '../Login/storage.service';
import {Observable} from 'rxjs';
import {Investment} from './investment';
import {Interest} from './interest';

@Injectable({
  providedIn: 'root'
})
export class InvestmentFundService {

  constructor(private http: HttpClient, private storageService: StorageService) { }
  token = this.storageService.getAccessToken();
  ServerUrl = 'https://devapi.didex.com/api/';
  httpOptions = {
    headers: new HttpHeaders({ 'accept': 'text/plain',
        'Authorization': 'Bearer ' + this.token,
      },
    ),
  };
  investmentPost(formdata: Investment ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'admin/InvestmentFund', formdata, this.httpOptions  );
  }
  interestPost(id: number , formdata: Interest ): Observable<any> {
    return this.http.post
    (this.ServerUrl + 'admin/InvestmentFund/' + id + '/Interest', formdata, this.httpOptions  );
  }
  investmentGet() {
    return this.http.get
    (this.ServerUrl + 'admin/InvestmentFund', this.httpOptions  );
  }
  idGet(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/InvestmentFund/' + id, this.httpOptions  );
  }
  idPut(id: number , formdata: Investment ): Observable<any> {
    return this.http.put
    (this.ServerUrl + 'admin/InvestmentFund/' + id , formdata, this.httpOptions  );
  }
  idDelete(id: number): Observable<any> {
    return this.http.delete
    (this.ServerUrl + 'admin/InvestmentFund/' + id, this.httpOptions  );
  }
  idUserInvestGet(id: number): Observable<any> {
    return this.http.get
    (this.ServerUrl + 'admin/InvestmentFund/' + id + '/UserInvest', this.httpOptions  );
  }
}
