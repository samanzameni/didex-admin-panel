import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {ReportsTradesService} from '../@core/Reports/reports-trades.service';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {ReportsTrades} from '../@core/Reports/reports-trades';
import {OrderSides} from '../@core/Reports/order-sides.enum';

@Component({
  selector: 'app-reports-trades',
  templateUrl: './reports-trades.component.html',
  styleUrls: ['./reports-trades.component.scss']
})
export class ReportsTradesComponent implements OnInit {
  reports: ReportsQuery;
  reportsRes: ReportsTrades;
  page = 1;
  pageSize = 10;
  tSide = OrderSides;
  constructor(private reportsTradesService: ReportsTradesService, private toastrService: ToastrService,
              private ngxShowLoader: NgxSpinnerService) {
    this.reports = {
      TraderId : null,
      Symbol : null,
      Desc: null,
      FilterBy: null,
      From: null,
      Till: null,
      Offset: null,
      Limit: null,
    };
    this.reportsRes = {
      count: null,
      records: [
        {
          id: null,
          marketSymbol: null,
          buyerTraderId: null,
          sellerTraderId: null,
          volume: null,
          volumeInQoute: null,
          price: null,
          buyerFee: null,
          sellerFee: null,
          timeStamp: null,
          takeSide: OrderSides.Buy,
        }
      ]
    };
  }
  receiveId($event) {
    this.reports.TraderId = $event;
  }
  reportsTradesGet() {
    this.ngxShowLoader.show();
    if (this.reports.FilterBy === 'timestamp' ) {
      if (this.reports.From != null) {
        this.reports.From = new Date(this.reports.From).toISOString();
      }
      if (this.reports.Till != null) {
        this.reports.Till = new Date(this.reports.Till).toISOString();
      }
    }
    return this.reportsTradesService.getReportsTrades(this.reports).subscribe(
      (res: any) => {
        console.log(res);
        this.reportsRes = res;

        for ( const i of this.reportsRes.records) {
          if ( i.timeStamp !== null) {i.timeStamp = i.timeStamp.split('T')[0]; }
        }
        this.reports.Till = null;
        this.reports.From = null;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.reportsTradesGet();
    window.scroll(0, 0);
  }

}
