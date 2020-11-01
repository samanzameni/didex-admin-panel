import { Injectable } from '@angular/core';
import {ReportsQuery} from '../Reports/reports-query';

@Injectable({
  providedIn: 'root'
})
export class SavesAdminService {
  query: ReportsQuery;
  constructor() {
    this.query = {
      Desc: null,
      UserId: null,
      roles: null
    };
  }
}
