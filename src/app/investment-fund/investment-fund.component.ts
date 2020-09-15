import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {SuperUserGuard} from '../@core/Login/super-user.guard';
import {InvestmentFundService} from '../@core/Investment Fund/investment-fund.service';
import {Investment} from '../@core/Investment Fund/investment';
import {InvestType} from '../@core/Investment Fund/invest-type.enum';
import {Interest} from '../@core/Investment Fund/interest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-investment-fund',
  templateUrl: './investment-fund.component.html',
  styleUrls: ['./investment-fund.component.scss']
})
export class InvestmentFundComponent implements OnInit {
  inv: Investment[];
  DSN: number;
  USN: number;
  ESN: number;
  ISN: number;
  IID: number;
  disableDelete = false;
  investmentType = InvestType;
  int: Interest;
  iForm: FormGroup;
  dateNgb: NgbDateStruct;
  constructor(private toastrService: ToastrService, private router: Router,
              private ngxShowLoader: NgxSpinnerService, public superUserGuard: SuperUserGuard ,
              private investment: InvestmentFundService, private formBuilder: FormBuilder,
              private ngbDateParserFormatter: NgbDateParserFormatter) {
    this.int = {
      date: null ,
      interestPersent: null ,
    };
    this.interestForm();
  }
  interestForm() {
    this.iForm = this.formBuilder.group({
      date: ['', Validators.required ],
      interestPersent: ['' , [Validators.required , Validators.min(0) , Validators.max(100)]],
    });
  }
  detailSN(id: number) {
    this.ESN = id;
    this.router.navigate(['/pages/detailInvestmentFund'],
      { queryParams: { id: this.ESN} });
  }
  updateSN(id: number) {
    this.USN = id;
    this.router.navigate(['/pages/editInvestmentFund'],
      { queryParams: { id: this.USN } });
  }
  send(i) {
    this.ISN = i;
    this.router.navigate(['/pages/userInvest'],
      { queryParams: { id: this.ISN} });
  }
  interestID(i) {
    this.IID = i;
  }
  deleteSN(id: number,  event) {
    if (event.target.checked) {
      this.DSN = id;
      this.disableDelete = true;
    } else {
      this.DSN = null;
      this.disableDelete = false;
    }
  }
  deSelectDelete(event) {
    if (event.target.checked) {
      this.DSN = null;
      this.disableDelete = false;
    }
  }
  deleteShortName() {
    this.ngxShowLoader.show();
    return this.investment.idDelete(this.DSN).subscribe(
      (res: any) => {
        console.log(res);
        this.disableDelete = false;
        this.showInvestmentList();
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Delete Investment.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  showInvestmentList() {
    this.ngxShowLoader.show();
    return this.investment.investmentGet().subscribe(
      (res: any) => {
        console.log(res);
         this.inv = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  addInterest() {
    this.ngxShowLoader.show();
    this.int.date =  new Date(this.ngbDateParserFormatter.format(this.dateNgb)).toISOString();
    return this.investment.interestPost( this.IID , this.int).subscribe(
      (res: any) => {
        console.log(res);
        this.int.interestPersent = null;
        this.int.date = null;
        this.dateNgb = null;
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add Investment Fund.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    this.showInvestmentList();
    window.scroll(0, 0);
  }
}
