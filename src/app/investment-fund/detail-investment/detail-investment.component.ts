import { Component, OnInit } from '@angular/core';
import {Currency} from '../../@core/Currency/currency';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute} from '@angular/router';
import {Investment} from '../../@core/Investment Fund/investment';
import {InvestmentFundService} from '../../@core/Investment Fund/investment-fund.service';
import {InvestType} from '../../@core/Investment Fund/invest-type.enum';

@Component({
  selector: 'app-detail-investment',
  templateUrl: './detail-investment.component.html',
  styleUrls: ['./detail-investment.component.scss']
})
export class DetailInvestmentComponent implements OnInit {

  SNCurrency: Investment;
  ESN: number;
  BCN = InvestType;
  constructor(private toastrService: ToastrService, private invest: InvestmentFundService,
              private ngxShowLoader: NgxSpinnerService, private router: ActivatedRoute) {
    this.SNCurrency = {
      fundCurrencyShortName: null,
      name: null,
      type: null,
      minimumFund: null,
      maximumFund: null,
      duration: null,
      fixedInterest: null,
      totalSupply: null,
      startDate: null,
      expirationDate: null,
    };
  }
  showShortName(id: number) {
    this.ngxShowLoader.show();
    return this.invest.idGet(id).subscribe(
      (res: any) => {
        console.log(res);
        this.SNCurrency = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.ESN = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    this.showShortName(this.ESN);
    window.scroll(0, 0);
  }

}
