import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../@core/Reports/reports.service';
import {ToastrService} from 'ngx-toastr';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {Reports} from '../@core/Reports/reports';
import {NgxSpinnerService} from 'ngx-spinner';
import {OrderSides} from '../@core/Reports/order-sides.enum';
import {OrderStatus} from '../@core/Reports/order-status.enum';
import {OrderType} from '../@core/Reports/order-type.enum';
import {OrderTimeInForce} from '../@core/Reports/order-time-in-force.enum';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


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
  oSides = OrderSides;
  oStatus = OrderStatus;
  oTimeInForce = OrderTimeInForce;
  oType = OrderType;
  fromNgb: NgbDateStruct;
  tillNgb: NgbDateStruct;
  constructor(private reportsService: ReportsService, private toastrService: ToastrService,
              private ngxShowLoader: NgxSpinnerService, private ngbDateParserFormatter: NgbDateParserFormatter) {
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
        side: OrderSides.Buy,
        status: OrderStatus.Canceled,
        type: OrderType.Limit,
        timeInForce: OrderTimeInForce.Day,
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
      if (this.fromNgb != null) {
        this.reports.From =  new Date(this.ngbDateParserFormatter.format(this.fromNgb)).toISOString();
      }
      if (this.tillNgb != null) {
        this.reports.Till =  new Date(this.ngbDateParserFormatter.format(this.tillNgb)).toISOString();
      }
    }
    return this.reportsService.getReports(this.reports).subscribe(
      (res: any) => {
        console.log(res);
        this.reportsRes = res;
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
    this.reportsGet();
    window.scroll(0, 0);
  }
}
