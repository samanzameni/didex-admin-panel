import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {BankService} from '../@core/Bank/bank.service';
import {Account} from '../@core/Bank/account';

@Component({
  selector: 'app-bank-account-confirmation',
  templateUrl: './bank-account-confirmation.component.html',
  styleUrls: ['./bank-account-confirmation.component.scss']
})
export class BankAccountConfirmationComponent implements OnInit {

  constructor( private ngxShowLoader: NgxSpinnerService, private toastrService: ToastrService, private bankService: BankService) { }
accountList: Account[];
account: Account;
  showAccount() {
    this.ngxShowLoader.show();
    return this.bankService.AccountGet().subscribe(
      (res: any) => {
        console.log(res);
        this.accountList = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  confirmAccount() {
    this.ngxShowLoader.show();
    return this.bankService.ConfirmGet(this.account.id).subscribe(
      (res: any) => {
        console.log(res);
        this.showAccount();
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  updateAccount(i) {
    this.account = i;
  }
  ngOnInit() {
    this.showAccount();
  }

}
