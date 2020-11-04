import { Injectable } from '@angular/core';
import {ReportsQuery} from './reports-query';

@Injectable({
  providedIn: 'root'
})
export class SavesReportsTradesService {
  query: ReportsQuery;
  constructor() {
    this.query = {
      TraderId : null,
      Symbol : null,
      Desc: null,
      FilterBy: null,
      From: null,
      Till: null,
      Offset: null,
      Limit: null,
    };
  }
}
