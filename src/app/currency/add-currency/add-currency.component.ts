import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {Currency} from '../../@core/Currency/currency';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent implements OnInit {
  cryPost: Currency;
  closeSubmitted = true;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private toastrService: ToastrService, private currency: CurrencyService, private ngxShowLoader: NgxSpinnerService) {
    this.cryPost = {
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
  addCurrency() {
    this.ngxShowLoader.show();
    return this.currency.currencyPost(this.cryPost).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.messageEvent.emit(this.closeSubmitted);
        this.toastrService.success('You Have Successfully Add Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  get fields(): string[] {
    const f = BlockChainNetworks;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
  }

}
