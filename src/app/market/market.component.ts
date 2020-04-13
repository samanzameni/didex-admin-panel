import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../@core/Market/market.service';
import {MarketList} from '../@core/Market/market-list';
import {NgxSpinnerService} from 'ngx-spinner';
import {SuperUserGuard} from '../@core/Login/super-user.guard';
import {Router} from '@angular/router';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss'],
})
export class MarketComponent implements OnInit {
  marketList: MarketList[];
  market: MarketList;
  marketDelete: MarketList;
  disableDelete = false;
  constructor(private toastrService: ToastrService, private marketService: MarketService, private router: Router,
              private ngxShowLoader: NgxSpinnerService, public superUserGuard: SuperUserGuard) {
    this.market = {
      baseCurrencyShortName: null,
      quoteCurrencyShortName: null,
      quantityIncrement: null,
      tickSize: null,
      takeLiquidityRate: null,
      provideLiquidityRate: null,
    };
    this.marketDelete = {
      baseCurrencyShortName: null,
      quoteCurrencyShortName: null,
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
        // console.log(res);
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
  updateMarket(i) {
    this.market = i;
    this.router.navigate(['/pages/marketEdit'],
        { queryParams: { symbol: this.market.symbol } });
}
  deleteMarket(symbol: string , event) {
    if (event.target.checked) {
      this.marketDelete.symbol = symbol;
      this.disableDelete = true;
    } else {
      this.marketDelete.symbol = null;
      this.disableDelete = false;
    }
  }
  deleteAccept() {
    this.deleteSymbol(this.marketDelete.symbol);
}
  deSelectDelete(event) {
    if (event.target.checked) {
      this.disableDelete = false;
      this.marketDelete.symbol = null;
    }
  }
  ngOnInit() {
    this.showMarket();
    window.scroll(0, 0);
  }

}
