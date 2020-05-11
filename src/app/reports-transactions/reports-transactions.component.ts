import {Component, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {ReportsTransactions} from '../@core/Reports/reports-transactions';
import {ReportsTransactionsService} from '../@core/Reports/reports-transactions.service';
import {TransactionStatus} from '../@core/Reports/transaction-status.enum';
import {TransactionType} from '../@core/Reports/transaction-type.enum';

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
  constructor(private reportsTransactionsService: ReportsTransactionsService, private toastrService: ToastrService,
              private ngxShowLoader: NgxSpinnerService) {
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
  }
  reportsTransactionsGet() {
    this.ngxShowLoader.show();
    if (this.reports.FilterBy === 'timestamp' ) {
      if (this.reports.From != null) {
        this.reports.From = new Date(this.reports.From).toISOString();
      }
      if (this.reports.Till != null) {
        this.reports.Till = new Date(this.reports.Till).toISOString();
      }
    }
    return this.reportsTransactionsService.getReportsTransactions(this.reports).subscribe(
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
    this.reportsTransactionsGet();
    window.scroll(0, 0);
  }
}
