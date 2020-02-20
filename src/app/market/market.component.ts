import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../@core/Market/market.service';
import {MarketList} from '../@core/Market/market-list';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  marketList: MarketList[];
  market: MarketList;
  marketDelete: MarketList;
  mainPage = true;
  editSubmitted = false;
  addSubmitted = false;
  constructor(private toastrService: ToastrService, private marketService: MarketService, private ngxShowLoader: NgxSpinnerService) {
    this.market = {
      baseCurrencyShortName: '',
      quoteCurrencyShortName: '',
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
    this.marketDelete = {
      baseCurrencyShortName: '',
      quoteCurrencyShortName: '',
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
  }

  showMarket() {
    this.ngxShowLoader.show();
    return this.marketService.MarketGet().subscribe(
      (res: any) => {
        console.log(res);
        this.marketList = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
}
  deleteSymbol(i) {
    this.ngxShowLoader.show();
    return this.marketService.symbolDelete(i).subscribe(
      (res: any) => {
        console.log(res);
        this.showMarket();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Delete Market.', '', {timeOut: 4000});
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Error.', '', {timeOut: 4000});
      },
    );
  }
  addMarket() {
    this.mainPage = false;
    this.addSubmitted = true;
  }
  updateMarket(i) {
    this.market = i;
    this.mainPage = false;
    this.editSubmitted = true;
}
  deleteMarket(i) {
    this.marketDelete = i;
  }
  deleteAccept() {
    this.deleteSymbol(this.marketDelete.symbol);
}
  userBack() {
    this.mainPage = true;
    this.editSubmitted = false;
    this.addSubmitted = false;
  }
  pageEdit($event) {
    this.editSubmitted = $event;
    this.mainPage = true;
    setTimeout(() => {
      this.showMarket();
    }, 2500);
  }
  pageAdd($event) {
    this.addSubmitted = $event;
    this.mainPage = true;
    setTimeout(() => {
      this.showMarket();
    }, 2500);
  }
  ngOnInit() {
    this.showMarket();
    window.scroll(0, 0);
  }

}
