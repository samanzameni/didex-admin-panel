import { Component, OnInit } from '@angular/core';
import {Pending} from '../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../@core/KYC/kyc.service';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss'],
})
export class KYCComponent implements OnInit {
  mainPage = true;
  list: Pending[];
  IList: Pending;
  constructor(private toastrService: ToastrService, private kycService: KYCService) { }
  getList() {
    return this.kycService.getPendingVerification().subscribe(
      (res: any) => {
        console.log(res);
        this.list = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  userDetail(i) {
    this.IList = i;
    this.mainPage = false;
  }
  back() {
    this.mainPage = true;
  }
  ngOnInit() {
    this.getList();
  }

}
