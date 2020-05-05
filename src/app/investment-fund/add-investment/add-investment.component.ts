import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {InvestmentFundService} from '../../@core/Investment Fund/investment-fund.service';
import {Investment} from '../../@core/Investment Fund/investment';
import {InvestType} from '../../@core/Investment Fund/invest-type.enum';

@Component({
  selector: 'app-add-investment',
  templateUrl: './add-investment.component.html',
  styleUrls: ['./add-investment.component.scss']
})
export class AddInvestmentComponent implements OnInit {

  invPost: Investment;
  currencyForm: FormGroup;
  constructor(private toastrService: ToastrService, private route: Router,
              private ngxShowLoader: NgxSpinnerService, private formBuilder: FormBuilder,
              private investmentFundService: InvestmentFundService) {
    this.createForm();
    this.invPost = {
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
  createForm() {
    this.currencyForm = this.formBuilder.group({
      fundCurrencyShortName: ['', Validators.required ],
      name: ['', Validators.required ],
      type: ['', [Validators.required]],
      minimumFund: ['', [Validators.required] ],
      maximumFund: ['', Validators.required ],
      duration: ['', Validators.required ],
      fixedInterest: ['', Validators.required ],
      totalSupply: ['', Validators.required ],
      startDate: ['', Validators.required ],
      expirationDate: ['', Validators.required ],
    });
  }
  addCurrency() {
    this.ngxShowLoader.show();
    return this.investmentFundService.investmentPost(this.invPost).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/investmentFund']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add Investment Fund.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  get fields(): string[] {
    const f = InvestType;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
