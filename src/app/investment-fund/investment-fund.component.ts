import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {SuperUserGuard} from '../@core/Login/super-user.guard';
import {InvestmentFundService} from '../@core/Investment Fund/investment-fund.service';
import {Investment} from '../@core/Investment Fund/investment';
import {InvestType} from '../@core/Investment Fund/invest-type.enum';

@Component({
  selector: 'app-investment-fund',
  templateUrl: './investment-fund.component.html',
  styleUrls: ['./investment-fund.component.scss']
})
export class InvestmentFundComponent implements OnInit {
  inv: Investment[];
  DSN: number;
  USN: number;
  ESN: number;
  ISN: number;
  disableDelete = false;
  investmentType = InvestType;
  constructor(private toastrService: ToastrService, private router: Router,
              private ngxShowLoader: NgxSpinnerService, public superUserGuard: SuperUserGuard ,
              private investment: InvestmentFundService) {
  }
  detailSN(id: number) {
    this.ESN = id;
    this.router.navigate(['/pages/detailInvestmentFund'],
      { queryParams: { id: this.ESN} });
  }
  updateSN(id: number) {
    this.USN = id;
    this.router.navigate(['/pages/editInvestmentFund'],
      { queryParams: { id: this.USN } });
  }
  send(i) {
    this.ISN = i;
    this.router.navigate(['/pages/userInvest'],
      { queryParams: { id: this.ISN} });
  }
  deleteSN(id: number,  event) {
    if (event.target.checked) {
      this.DSN = id;
      this.disableDelete = true;
    } else {
      this.DSN = null;
      this.disableDelete = false;
    }
  }
  deSelectDelete(event) {
    if (event.target.checked) {
      this.DSN = null;
      this.disableDelete = false;
    }
  }
  deleteShortName() {
    this.ngxShowLoader.show();
    return this.investment.idDelete(this.DSN).subscribe(
      (res: any) => {
        console.log(res);
        this.showInvestmentList();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Delete Investment.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  showInvestmentList() {
    this.ngxShowLoader.show();
    return this.investment.investmentGet().subscribe(
      (res: any) => {
        console.log(res);
        this.inv = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.showInvestmentList();
    window.scroll(0, 0);
  }


}
