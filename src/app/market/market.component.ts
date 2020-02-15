import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../@core/Market/market.service';
import {MarketList} from '../@core/Market/market-list';

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
  constructor(private toastrService: ToastrService, private marketService: MarketService) {
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
    return this.marketService.MarketGet().subscribe(
      (res: any) => {
        console.log(res);
        this.marketList = res;
      },
      (err) => {
        console.log(err);
      },
    );
}
  deleteSymbol(i) {
    return this.marketService.symbolDelete(i).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You Have Successfully Delete Market.', '', {timeOut: 4000});
        this.showMarket();
      },
      (err) => {
        console.log(err);
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
  }

}
