import { Injectable } from '@angular/core';
import {ReportsQuery} from '../Reports/reports-query';

@Injectable({
  providedIn: 'root'
})
export class SavesInvestmentService {
  query: ReportsQuery;
  constructor() {
    this.query = {
      Desc: null,
      UserId: null
    };
  }
}
