import { Injectable } from '@angular/core';
import {ReportsQuery} from './reports-query';

@Injectable({
  providedIn: 'root'
})
export class SavesReportsTransactionsService {
  query: ReportsQuery;
  constructor() {
    this.query = {
      TraderId : null,
      CurrencyShortName : null,
      TransactionId : null,
      Desc: null,
      FilterBy: null,
      From: null,
      Till: null,
      Offset: null,
      Limit: null,
    };
  }
}
