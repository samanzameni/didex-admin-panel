import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../@core/Reports/reports.service';
import {ToastrService} from 'ngx-toastr';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {Reports} from '../@core/Reports/reports';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  reports: ReportsQuery;
  reportsRes: Reports;
  page = 1;
  pageSize = 10;
  constructor(private reportsService: ReportsService, private toastrService: ToastrService, private ngxShowLoader: NgxSpinnerService) {
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
    traderId: null,
    marketSymbol: null,
    side: null,
    status: null,
    type: null,
    timeInForce: null,
    quantity: null,
    price: null,
    executedQuantity: null,
    createdAt: null,
    updatedAt: null,
    stopPrice: null,
    postOnly: null,
    expireTime: null,
  }
  ]
    };
  }
  receiveId($event) {
    this.reports.TraderId = $event;
  }
  reportsGet() {
    this.ngxShowLoader.show();
    if (this.reports.FilterBy === 'timestamp' ) {
      if (this.reports.From != null) {
        this.reports.From = new Date(this.reports.From).toISOString();
        console.log(this.reports.From);
      }
      if (this.reports.Till != null) {
        this.reports.Till = new Date(this.reports.Till).toISOString();
      }
    }
    return this.reportsService.getReports(this.reports).subscribe(
      (res: any) => {
        console.log(res);
        this.reportsRes = res;

        for ( const i of this.reportsRes.records) {
          if ( i.updatedAt !== null) {i.updatedAt = i.updatedAt.split('T')[0]; }
          if ( i.expireTime !== null) {i.expireTime = i.expireTime.split('T')[0]; }
          if ( i.createdAt !== null) {i.createdAt = i.createdAt.split('T')[0]; }
        }
        this.reports.Till = null;
        this.reports.From = null;
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Get Reports.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
