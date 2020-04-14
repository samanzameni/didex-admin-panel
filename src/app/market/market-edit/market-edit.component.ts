import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketList} from '../../@core/Market/market-list';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../../@core/Market/market.service';
import {MarketPut} from '../../@core/Market/market-put';
import {NgxSpinnerService} from 'ngx-spinner';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-market-edit',
  templateUrl: './market-edit.component.html',
  styleUrls: ['./market-edit.component.scss'],
})
export class MarketEditComponent implements OnInit {
  market: MarketList;
  marketList: MarketList[];
  marketPut: MarketPut;
  marketForm: FormGroup;
  SQueryParam: string;
  constructor(private toastrService: ToastrService, private marketService: MarketService, private router: ActivatedRoute,
              private route: Router, private formBuilder: FormBuilder, private ngxShowLoader: NgxSpinnerService) {
    this.market = {
      baseCurrencyShortName: null,
      quoteCurrencyShortName: null,
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
    this.marketPut = {
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
    this.createForm();
  }
  createForm() {
    this.marketForm = this.formBuilder.group({
      takeLiquidityRate: ['', [Validators.required, Validators.min(0.00000001), Validators.max(1)] ],
      provideLiquidityRate: ['', [Validators.required, Validators.min(0.00000001), Validators.max(1)] ],
      tickSize: ['', [Validators.required, Validators.min(0), Validators.max(1)]],
      quantityIncrement: ['', [Validators.required, Validators.min(0), Validators.max(1)]],
    });
  }
  addSubmit() {
    this.ngxShowLoader.show();
    return this.marketService.symbolPut(this.marketPut.symbol, this.marketPut).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/market']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add To Market.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  showMarket() {
    this.ngxShowLoader.show();
    return this.marketService.MarketGet().subscribe(
      (res: any) => {
        console.log(res);
        this.marketList = res;
        for (const i of this.marketList) {
          if (this.SQueryParam === i.symbol) {
            this.market = i;
            this.marketPut = this.market;
            console.log(this.market);
          }
        }
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.SQueryParam = this.router.snapshot.queryParamMap.get('symbol');
    this.showMarket();
    window.scroll(0, 0);
  }

}
