import { Component, OnInit } from '@angular/core';
import {BlockChainNetworks} from '../@core/Currency/block-chain-networks.enum';
import {Currency} from '../@core/Currency/currency';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../@core/Currency/currency.service';
import {AdminService} from '../@core/Admin/admin.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  cry: Currency[];
   DSN: string;
   USN: string;
   ESN: string;
  editSubmitted: boolean;
  addSubmitted: boolean;
  detailSubmitted: boolean;
  pageSubmitted: boolean;
  constructor(private toastrService: ToastrService, private currency: CurrencyService, private ngxShowLoader: NgxSpinnerService) {
  }
  addSN() {
    this.pageSubmitted = false;
    this.addSubmitted = true;
  }
  detailSN(shortName: string) {
    this.ESN = shortName;
    this.pageSubmitted = false;
    this.detailSubmitted = true;
  }
  updateSN(shortName: string) {
    this.USN = shortName;
    this.pageSubmitted = false;
    this.editSubmitted = true;
  }
  deleteSN(shortName: string) {
    this.DSN = shortName;
  }
  deleteShortName() {
    this.ngxShowLoader.show();
    return this.currency.shortNameDelete(this.DSN).subscribe(
      (res: any) => {
        console.log(res);
        this.showCurrencyList();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Delete Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  showCurrencyList() {
    this.ngxShowLoader.show();
    return this.currency.currencyGet().subscribe(
      (res: any) => {
        console.log(res);
        this.cry = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  back() {
    this.showCurrencyList();
    this.editSubmitted = false;
    this.addSubmitted = false;
    this.detailSubmitted = false;
    this.pageSubmitted = true;
  }
  receiveMessage($event) {
    this.showCurrencyList();
    this.pageSubmitted = $event;
    this.editSubmitted = false;
    this.addSubmitted = false;
    this.detailSubmitted = false;
  }
  ngOnInit() {
     this.showCurrencyList();
     this.pageSubmitted = true;
     this.editSubmitted = false;
     this.addSubmitted = false;
     this.detailSubmitted = false;
     window.scroll(0, 0);
  }

}
