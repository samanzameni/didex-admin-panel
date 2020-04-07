import { Component, OnInit } from '@angular/core';
import {Currency} from '../@core/Currency/currency';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {SuperUserGuard} from '../@core/Login/super-user.guard';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.scss'],
})
export class CurrencyComponent implements OnInit {
  cry: Currency[];
   DSN: string;
   DN: string;
   USN: string;
   ESN: string;
  disableDelete = false;
  constructor(private toastrService: ToastrService, private currency: CurrencyService, private router: Router,
              private ngxShowLoader: NgxSpinnerService, private superUserGuard: SuperUserGuard) {
  }
  detailSN(shortName: string) {
    this.ESN = shortName;
    this.router.navigate(['/pages/currencyDetail'],
        { queryParams: { shortName: this.ESN} });
  }
  updateSN(shortName: string) {
    this.USN = shortName;
    this.router.navigate(['/pages/currencyEdit'],
        { queryParams: { shortName: this.USN } });
  }
  deleteSN(name: string, shortName: string,  event) {
    if (event.target.checked) {
      this.DSN = shortName;
      this.DN = name;
      this.disableDelete = true;
    } else {
      this.DSN = null;
      this.DN = null;
      this.disableDelete = false;
    }
  }
  deSelectDelete(event) {
    if (event.target.checked) {
      this.DSN = null;
      this.DN = null;
      this.disableDelete = false;
    }
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
  ngOnInit() {
     this.showCurrencyList();
     window.scroll(0, 0);
  }

}
