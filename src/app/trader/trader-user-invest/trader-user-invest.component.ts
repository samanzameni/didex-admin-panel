import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InvestmentFundService} from '../../@core/Investment Fund/investment-fund.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserInvest} from '../../@core/Trader/user-invest';
import {UserInvestStatus} from '../../@core/Investment Fund/user-invest-status.enum';
import {InvestRecords} from '../../@core/Investment Fund/invest-records';
import {InvestType} from '../../@core/Investment Fund/invest-type.enum';


@Component({
  selector: 'app-trader-user-invest',
  templateUrl: './trader-user-invest.component.html',
  styleUrls: ['./trader-user-invest.component.scss']
})
export class TraderUserInvestComponent implements OnInit {
  DId: number;
  userInvest: UserInvest;
  userInvestRecords: InvestRecords[];
  statusInvest = UserInvestStatus;
  investType = InvestType;
  constructor(private router: ActivatedRoute, private investmentFundService: InvestmentFundService,
              private ngxShowLoader: NgxSpinnerService) {
    this.userInvest = {
      count: null,
    records: [
      {
        id: null,
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
  }

  showInvest() {
    this.ngxShowLoader.show();
    return this.investmentFundService.idUserInvestGet(this.DId).subscribe(
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
  ngOnInit() {
    this.DId = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    this.showInvest();
  }

}
