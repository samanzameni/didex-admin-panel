import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {ReportsTradesService} from '../@core/Reports/reports-trades.service';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {ReportsTrades} from '../@core/Reports/reports-trades';
import {OrderSides} from '../@core/Reports/order-sides.enum';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {SavesReportsService} from '../@core/Reports/saves-reports.service';
import {SavesReportsTradesService} from '../@core/Reports/saves-reports-trades.service';

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
  fromNgb: NgbDateStruct;
  tillNgb: NgbDateStruct;
  constructor(private reportsTradesService: ReportsTradesService, private toastrService: ToastrService,
              private ngxShowLoader: NgxSpinnerService, private ngbDateParserFormatter: NgbDateParserFormatter,
              private savesReportsTradesService: SavesReportsTradesService) {
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
    if ($event !== null) {
      this.reportsTradesGet();
    }
  }
  selectedOrder(event) {
    if (event.target.value !== null) {
      this.reportsTradesGet();
    }
  }
  reportsTradesGet() {
    this.ngxShowLoader.show();
    if (this.reports.FilterBy === 'timestamp' ) {
      if (this.fromNgb != null) {
        this.reports.From =  new Date(this.ngbDateParserFormatter.format(this.fromNgb)).toISOString();
      }
      if (this.tillNgb != null) {
        this.reports.Till =  new Date(this.ngbDateParserFormatter.format(this.tillNgb)).toISOString();
      }
    }
    this.savesReportsTradesService.query = this.reports;
    return this.reportsTradesService.getReportsTrades(this.reports).subscribe(
      (res: any) => {
        console.log(res);
        this.reportsRes = res;
        // this.reports.Till = null;
        // this.reports.From = null;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    if (this.savesReportsTradesService.query.Desc !== null) {
      this.reports.Desc = this.savesReportsTradesService.query.Desc ;
    }
    if (this.savesReportsTradesService.query.TraderId !== null) {
      this.reports.TraderId = this.savesReportsTradesService.query.TraderId ;
    }
    if (this.savesReportsTradesService.query.Symbol !== null) {
      this.reports.Symbol = this.savesReportsTradesService.query.Symbol ;
    }
    if (this.savesReportsTradesService.query.FilterBy !== null) {
      this.reports.FilterBy = this.savesReportsTradesService.query.FilterBy ;
    }
    if (this.savesReportsTradesService.query.From !== null) {
      this.reports.From = this.savesReportsTradesService.query.From ;
    }
    if (this.savesReportsTradesService.query.Till !== null) {
      this.reports.Till = this.savesReportsTradesService.query.Till ;
    }
    this.reportsTradesGet();
    window.scroll(0, 0);
  }

}
