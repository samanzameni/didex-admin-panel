import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Trader} from '../@core/Trader/trader';
import {TraderService} from '../@core/Trader/trader.service';
import {TraderStatus} from '../@core/Trader/trader-status.enum';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {TraderRes} from '../@core/Trader/trader-res';
import {ReportsQuery} from '../@core/Reports/reports-query';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss'],
})
export class TraderComponent implements OnInit {
  traderList: TraderRes;
  trader: Trader;
  traderEnum = TraderStatus;
  querySearch: ReportsQuery;
  constructor(private toastrService: ToastrService, private traderService: TraderService, private ngxShowLoader: NgxSpinnerService,
              private router: Router) {
    this.trader = {
          id: null,
          email: null,
          status: TraderStatus.Newbie,
    };
    this.traderList = {
      count: null,
      records: [
        {
      id: null,
      email: null,
      status: TraderStatus.Newbie,
        }
      ]
    };
    this.querySearch = {
      UserId: null,
    };
  }
  showTrader() {
    this.ngxShowLoader.show();
    return this.traderService.traderGet().subscribe(
      (res: any) => {
        console.log(res);
        this.traderList = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  change(i) {
    this.trader.id = i;
  }
  changeTrader() {
    this.ngxShowLoader.show();
    return this.traderService.traderPatch(this.trader.id , this.trader).subscribe(
      (res: any) => {
        console.log(res);
        this.showTrader();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Change Status.', '', {timeOut: 4000});

      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Error', '', {timeOut: 4000});

      },
    );
  }
  get fields(): string[] {
    const f = TraderStatus;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  receiveId($event) {
    this.querySearch.UserId = $event;
  }
  showSearch() {
    this.ngxShowLoader.show();
    return this.traderService.searchGet(this.querySearch).subscribe(
      (res: any) => {
        console.log(res);
        this.traderList = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.showTrader();
    window.scroll(0, 0);
  }

}
