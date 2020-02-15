import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Trader} from '../@core/Trader/trader';
import {TraderService} from '../@core/Trader/trader.service';
import {TraderStatus} from '../@core/Trader/trader-status.enum';

@Component({
  selector: 'app-trader',
  templateUrl: './trader.component.html',
  styleUrls: ['./trader.component.scss'],
})
export class TraderComponent implements OnInit {
traderList: Trader[];
trader: Trader;
traderEnum = TraderStatus;
  constructor(private toastrService: ToastrService, private traderService: TraderService) {
    this.trader = {
      id: null,
      email: '',
      status: TraderStatus.Newbie,
    };
  }

  showTrader() {
    return this.traderService.traderGet().subscribe(
      (res: any) => {
        console.log(res);
        this.traderList = res;
      },
      (err) => {
        console.log(err);

      },
    );
  }
  change(i) {
    this.trader.id = i;
  }
  changeTrader() {
    return this.traderService.traderPatch(this.trader.id , this.trader).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You Have Successfully Change Status.', '', {timeOut: 4000});
        this.showTrader();
      },
      (err) => {
        console.log(err);
        this.toastrService.error('Error', '', {timeOut: 4000});

      },
    );
  }
  get fields(): string[] {
    const f = TraderStatus;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    this.showTrader();
  }

}
