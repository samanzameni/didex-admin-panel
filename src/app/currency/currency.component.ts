import { Component, OnInit } from '@angular/core';
import {BlockChainNetworks} from '../@core/Currency/block-chain-networks.enum';
import {Currency} from '../@core/Currency/currency';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../@core/Currency/currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  cry: Currency[];
  cryPost: Currency;
  SNCurrency: Currency;
  public DSN: string;
  public USN: string;
  constructor(private toastrService: ToastrService, private currency: CurrencyService) {
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
    return this.currency.currencyPost(this.cryPost).subscribe(
      (res: any) => {
        console.log(res);
        this.showCurrency();
        this.toastrService.success('You Have Successfully Add Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  showCurrency() {
    return this.currency.currencyGet().subscribe(
      (res: any) => {
        console.log(res);
        this.cry = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  showShortName(shortName: string) {
    return this.currency.shortNameGet(shortName).subscribe(
      (res: any) => {
        console.log(res);
        this.SNCurrency = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  updateSN(shortName: string) {
    this.USN = shortName;
    this.showShortName(this.USN);
  }
  updateSHortName() {
    return this.currency.shortNamePut(this.USN , this.SNCurrency).subscribe(
      (res: any) => {
        console.log(res);
        this.showCurrency();
        this.toastrService.success('You Have Successfully Update Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
      },
    );
  }
  deleteSN(shortName: string) {
    this.DSN = shortName;
  }
  deleteShortName() {
    return this.currency.shortNameDelete(this.DSN).subscribe(
      (res: any) => {
        console.log(res);
        this.showCurrency();
        this.toastrService.success('You Have Successfully Delete Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
      },
    );
  }
   get fields(): string[] {
    const f = BlockChainNetworks;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }

  ngOnInit() {
     this.showCurrency();
  }

}
