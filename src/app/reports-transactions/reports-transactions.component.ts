import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {ReportsTransactions} from '../@core/Reports/reports-transactions';
import {ReportsTransactionsService} from '../@core/Reports/reports-transactions.service';
import {TransactionStatus} from '../@core/Reports/transaction-status.enum';
import {TransactionType} from '../@core/Reports/transaction-type.enum';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import {SavesReportsService} from '../@core/Reports/saves-reports.service';
import {SavesReportsTransactionsService} from '../@core/Reports/saves-reports-transactions.service';

@Component({
  selector: 'app-reports-transactions',
  templateUrl: './reports-transactions.component.html',
  styleUrls: ['./reports-transactions.component.scss']
})
export class ReportsTransactionsComponent implements OnInit {
  reports: ReportsQuery;
  reportsRes: ReportsTransactions;
  page = 1;
  pageSize = 10;
  tStatus = TransactionStatus;
  tType = TransactionType;
  fromNgb: NgbDateStruct;
  tillNgb: NgbDateStruct;
  constructor(private reportsTransactionsService: ReportsTransactionsService, private toastrService: ToastrService,
              private ngxShowLoader: NgxSpinnerService, private ngbDateParserFormatter: NgbDateParserFormatter,
              private savesReportsTransactionsService: SavesReportsTransactionsService) {
    this.reports = {
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
    this.reportsRes = {
      count: null,
      records: [
        {
          id: null,
          transactionId: null,
          traderId: null,
          currencyShortName: null,
          amount: null,
          fee: null,
          address: null,
          hash: null,
          status: TransactionStatus.Created,
          type: TransactionType.BankToExchange,
          createdAt: null,
          updatedAt: null,
          errorCode: null,
        }
      ]
    };
  }

  receiveId($event) {
    this.reports.TraderId = $event;
    if ($event !== null) {
      this.reportsTransactionsGet();
    }
  }
  selectedOrder(event) {
    if (event.target.value !== null) {
      this.reportsTransactionsGet();
    }
  }
  reportsTransactionsGet() {
    this.ngxShowLoader.show();
    if (this.reports.FilterBy === 'timestamp' ) {
      if (this.fromNgb != null) {
        this.reports.From =  new Date(this.ngbDateParserFormatter.format(this.fromNgb)).toISOString();
      }
      if (this.tillNgb != null) {
        this.reports.Till =  new Date(this.ngbDateParserFormatter.format(this.tillNgb)).toISOString();
      }
    }
    this.savesReportsTransactionsService.query = this.reports;
    return this.reportsTransactionsService.getReportsTransactions(this.reports).subscribe(
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
    if (this.savesReportsTransactionsService.query.Desc !== null) {
      this.reports.Desc = this.savesReportsTransactionsService.query.Desc ;
    }
    if (this.savesReportsTransactionsService.query.TraderId !== null) {
      this.reports.TraderId = this.savesReportsTransactionsService.query.TraderId ;
    }
    if (this.savesReportsTransactionsService.query.CurrencyShortName !== null) {
      this.reports.CurrencyShortName = this.savesReportsTransactionsService.query.CurrencyShortName ;
    }
    if (this.savesReportsTransactionsService.query.TransactionId !== null) {
      this.reports.TransactionId = this.savesReportsTransactionsService.query.TransactionId ;
    }
    if (this.savesReportsTransactionsService.query.FilterBy !== null) {
      this.reports.FilterBy = this.savesReportsTransactionsService.query.FilterBy ;
    }
    if (this.savesReportsTransactionsService.query.From !== null) {
      this.reports.From = this.savesReportsTransactionsService.query.From ;
    }
    if (this.savesReportsTransactionsService.query.Till !== null) {
      this.reports.Till = this.savesReportsTransactionsService.query.Till ;
    }
    this.reportsTransactionsGet();
    window.scroll(0, 0);
  }
}
