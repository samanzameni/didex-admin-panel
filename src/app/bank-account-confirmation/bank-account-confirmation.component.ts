  import { Component, OnInit } from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import {BankService} from '../@core/Bank/bank.service';
import {Account} from '../@core/Bank/account';
  import {Query} from '../@core/Bank/query';

@Component({
  selector: 'app-bank-account-confirmation',
  templateUrl: './bank-account-confirmation.component.html',
  styleUrls: ['./bank-account-confirmation.component.scss']
})
export class BankAccountConfirmationComponent implements OnInit {
  accountList: Account[];
  account: Account;
  query: Query;
  iBanStatus: string;
  checkError: boolean;
  errorArray: string[];
  constructor( private ngxShowLoader: NgxSpinnerService, private toastrService: ToastrService, private bankService: BankService) {
    this.query = {
      cardHolderName: null,
      iBanName: null,
      iBanStatus: null,
    };
  }

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
  getQuery(i) {
    this.ngxShowLoader.show();
    this.account = i;
    return this.bankService.queryGet(this.account.id).subscribe(
      (res: any) => {
        console.log(res);
        this.query = res;
        this.checkError = false;
        if ( this.query.iBanStatus === true) {
          this.iBanStatus = 'this user are active';
        } else { this.iBanStatus = 'this user are inactive'; }
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        const error = err.error;
        this.checkError = true;
        if (error) {
          this.errorArray = Object.values(error.errors);
        }
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
