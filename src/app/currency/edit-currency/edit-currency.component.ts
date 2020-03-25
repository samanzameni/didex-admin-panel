import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {Currency} from '../../@core/Currency/currency';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.scss']
})
export class EditCurrencyComponent implements OnInit {
  SNCurrency: Currency;
  @Input() USN: string;
  closeSubmitted = true;
  @Output() messageEvent = new EventEmitter<boolean>();
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
  updateSHortName() {
    this.ngxShowLoader.show();
    return this.currency.shortNamePut(this.USN , this.SNCurrency).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.messageEvent.emit(this.closeSubmitted);
        this.toastrService.success('You Have Successfully Update Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
      },
    );
  }
  get fields(): string[] {
    const f = BlockChainNetworks;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    this.showShortName(this.USN);
    window.scroll(0, 0);
  }

}
