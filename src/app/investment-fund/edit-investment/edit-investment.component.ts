import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute, Router} from '@angular/router';
import {InvestmentFundService} from '../../@core/Investment Fund/investment-fund.service';
import {Investment} from '../../@core/Investment Fund/investment';
import {InvestType} from '../../@core/Investment Fund/invest-type.enum';

@Component({
  selector: 'app-edit-investment',
  templateUrl: './edit-investment.component.html',
  styleUrls: ['./edit-investment.component.scss']
})
export class EditInvestmentComponent implements OnInit {

  SNCurrency: Investment;
  USN: number;
  currencyForm: FormGroup;
  constructor(private toastrService: ToastrService, private investmentFundService: InvestmentFundService, private formBuilder: FormBuilder,
              private ngxShowLoader: NgxSpinnerService, private router: ActivatedRoute, private route: Router) {
    this.createForm();
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
  showShortName(id: number) {
    this.ngxShowLoader.show();
    return this.investmentFundService.idGet(id).subscribe(
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
  updateSHortName() {
    this.ngxShowLoader.show();
    return this.investmentFundService.idPut(this.USN , this.SNCurrency).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/investmentFund']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Update Investment Fund.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
      },
    );
  }
  get fields(): string[] {
    const f = InvestType;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    this.USN = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    this.showShortName(this.USN);
    window.scroll(0, 0);
  }
}
