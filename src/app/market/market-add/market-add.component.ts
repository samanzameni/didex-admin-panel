import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../../@core/Market/market.service';
import {MarketList} from '../../@core/Market/market-list';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {Currency} from '../../@core/Currency/currency';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {KYCService} from '../../@core/KYC/kyc.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-market-add',
  templateUrl: './market-add.component.html',
  styleUrls: ['./market-add.component.scss'],
})
export class MarketAddComponent implements OnInit {
  marketForm: FormGroup;
marketAdd: MarketList;
cur: Currency[];
  addSubmitted: boolean;
  @Output() pageEvent = new EventEmitter<boolean>();
  constructor(private toastrService: ToastrService, private marketService: MarketService,
              private currency: CurrencyService, private formBuilder: FormBuilder, private ngxShowLoader: NgxSpinnerService) {
    this.createForm();
    this.marketAdd = {
      baseCurrencyShortName: '',
      quoteCurrencyShortName: '',
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
  }
  createForm() {
    this.marketForm = this.formBuilder.group({
      takeLiquidityRate: ['', Validators.required ],
      provideLiquidityRate: ['', Validators.required ],
      baseCurrencyShortName: ['', Validators.required ],
      quoteCurrencyShortName: ['', Validators.required ],
      tickSize: ['', Validators.required ],
      quantityIncrement: ['', Validators.required ],
    });
  }
  addSubmit() {
    this.ngxShowLoader.show();
    this.addSubmitted = false;
    this.pageEvent.emit(this.addSubmitted);
    return this.marketService.MarketPost(this.marketAdd).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add To Market.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Take Liquidity Rate & Provide Liquidity Rate should be between 0 and 1.',
          '', {timeOut: 4000});
      },
    );
  }
  showCurrency() {
    this.ngxShowLoader.show();
    return this.currency.currencyGet().subscribe(
      (res: any) => {
        console.log(res);
        this.cur = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
  this.showCurrency();
    window.scroll(0, 0);
  }

}
