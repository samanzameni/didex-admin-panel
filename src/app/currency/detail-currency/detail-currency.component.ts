import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {Currency} from '../../@core/Currency/currency';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.scss']
})
export class DetailCurrencyComponent implements OnInit {
  SNCurrency: Currency;
  ESN: string;
  BCN = BlockChainNetworks;
  constructor(private toastrService: ToastrService, private currency: CurrencyService,
              private ngxShowLoader: NgxSpinnerService, private router: ActivatedRoute) {
    this.SNCurrency = {
      shortName: null,
      name: null,
      network: null,
      crypto: null,
      enabled: null,
      payinEnabled: null,
      payinConfirmations: null,
      payoutEnabled: null,
      transferEnabled: null,
      payoutFee: null,
      minWithdraw: null,
      minDeposit: null,
    };
  }
  showShortName(shortName: string) {
    this.ngxShowLoader.show();
    return this.currency.shortNameGet(shortName).subscribe(
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
  ngOnInit() {
    this.ESN = this.router.snapshot.queryParamMap.get('shortName');
    this.showShortName(this.ESN);
    window.scroll(0, 0);
  }

}
