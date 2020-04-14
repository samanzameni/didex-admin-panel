import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../../@core/Market/market.service';
import {MarketList} from '../../@core/Market/market-list';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {Currency} from '../../@core/Currency/currency';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute, Router} from '@angular/router';

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
  constructor(private toastrService: ToastrService, private marketService: MarketService, private route: Router,
              private currency: CurrencyService, private formBuilder: FormBuilder, private ngxShowLoader: NgxSpinnerService) {
    this.createForm();
    this.marketAdd = {
      baseCurrencyShortName: null,
      quoteCurrencyShortName: null,
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
  }
  createForm() {
    this.marketForm = this.formBuilder.group({
      baseCurrencyShortName: ['', Validators.required ],
      quoteCurrencyShortName: ['', Validators.required ],
      takeLiquidityRate: ['', [Validators.required, Validators.min(0.00000001), Validators.max(1)] ],
      provideLiquidityRate: ['', [Validators.required, Validators.min(0.00000001), Validators.max(1)] ],
      tickSize: ['', [Validators.required, Validators.min(0), Validators.max(1)]],
      quantityIncrement: ['', [Validators.required, Validators.min(0), Validators.max(1)]],
    });
  }
  addSubmit() {
    this.ngxShowLoader.show();
    this.addSubmitted = false;
    this.pageEvent.emit(this.addSubmitted);
    return this.marketService.MarketPost(this.marketAdd).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/market']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add To Market.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
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
