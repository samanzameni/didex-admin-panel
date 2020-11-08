import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InvestmentFundService} from '../../@core/Investment Fund/investment-fund.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserInvest} from '../../@core/Trader/user-invest';
import {UserInvestStatus} from '../../@core/Investment Fund/user-invest-status.enum';
import {InvestRecords} from '../../@core/Investment Fund/invest-records';
import {InvestType} from '../../@core/Investment Fund/invest-type.enum';
import {ReportsQuery} from '../../@core/Reports/reports-query';
import {SavesInvestmentService} from '../../@core/Investment Fund/saves-investment.service';


@Component({
  selector: 'app-trader-user-invest',
  templateUrl: './trader-user-invest.component.html',
  styleUrls: ['./trader-user-invest.component.scss']
})
export class TraderUserInvestComponent implements OnInit {
  DId: number;
  userInvest: UserInvest;
  userInvestRecords: InvestRecords[];
  querySearch: ReportsQuery;
  statusInvest = UserInvestStatus;
  investType = InvestType;
  page = 1;
  pageSize = 10;
  constructor(private router: ActivatedRoute, private investmentFundService: InvestmentFundService,
              private ngxShowLoader: NgxSpinnerService, private savesInvestmentService: SavesInvestmentService) {
    this.userInvest = {
      count: null,
    records: [
      {
        id: null,
        traderEmail: null,
        investmentFundId: null,
        traderId: null,
        investDate: null,
        totalEarn: null,
        amount: null,
        investRecords: [
        {
          id: null,
          brfore: null,
          after: null,
          accrued: null,
          type: null,
          timeStamp: null,
    }
    ],
        status: null,
    }
  ],
    };
    this.querySearch = {
      UserId: null,
      Desc: null,
    };
  }

  showInvest() {
    this.ngxShowLoader.show();
    this.savesInvestmentService.query = this.querySearch;
    return this.investmentFundService.idUserInvestGet(this.DId , this.querySearch).subscribe(
      (res: any) => {
        console.log(res);
        this.userInvest = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  investRecords(i) {
    this.userInvestRecords = i;
}
  receiveId($event) {
    this.querySearch.UserId = $event;
    if ($event !== null) {
      this.showInvest();
    }
  }
  selectedOrder(event) {
    if (event.target.value !== null) {
      this.showInvest();
    }
  }
  ngOnInit() {
    this.DId = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    if (this.savesInvestmentService.query.Desc !== null) {
      this.querySearch.Desc = this.savesInvestmentService.query.Desc ;
    }
    if (this.savesInvestmentService.query.UserId !== null) {
      this.querySearch.UserId = this.savesInvestmentService.query.UserId ;
    }
    this.showInvest();
  }

}
