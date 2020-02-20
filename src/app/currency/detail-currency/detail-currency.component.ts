import {Component, Input, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {Currency} from '../../@core/Currency/currency';

@Component({
  selector: 'app-detail-currency',
  templateUrl: './detail-currency.component.html',
  styleUrls: ['./detail-currency.component.scss']
})
export class DetailCurrencyComponent implements OnInit {
  SNCurrency: Currency;
  @Input() ESN: string;
  constructor(private toastrService: ToastrService, private currency: CurrencyService, private ngxShowLoader: NgxSpinnerService) {
    this.SNCurrency = {
      shortName: '',
      name: '',
      network: BlockChainNetworks.NotBlockChain,
      crypto: false,
      enabled: false,
      payinEnabled: false,
      payinConfirmations: 0,
      payoutEnabled: false,
      transferEnabled: false,
      payoutFee: 0,
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
  get fields(): string[] {
    const f = BlockChainNetworks;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    this.showShortName(this.ESN);
  }

}
