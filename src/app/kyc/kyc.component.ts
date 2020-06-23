import { Component, OnInit } from '@angular/core';
import {Pending} from '../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../@core/KYC/kyc.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';
import {PendingList} from '../@core/KYC/pending-list';
import {ReportsQuery} from '../@core/Reports/reports-query';

@Component({
  selector: 'app-kyc',
  templateUrl: './kyc.component.html',
  styleUrls: ['./kyc.component.scss'],
})
export class KYCComponent implements OnInit {
  list: PendingList;
  IList: Pending;
  page = 1;
  pageSize = 10;
  querySearch: ReportsQuery;
  constructor(private toastrService: ToastrService, private kycService: KYCService,
              private ngxShowLoader: NgxSpinnerService, private router: Router) {
    this.IList = {
      id: null,
      firstName: null,
      lastName: null,
    };
    this.list = {
      count: null,
      records: [{
        id: null,
        firstName: null,
        lastName: null,
      }],
    };
    this.querySearch = {
      UserId: null,
    };
  }
  receiveId($event) {
    this.querySearch.UserId = $event;
  }
  getList() {
    this.ngxShowLoader.show();
    return this.kycService.getPendingVerification(this.querySearch).subscribe(
      (res: any) => {
        console.log(res);
        this.list = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  userDetail(i) {
    this.IList = i;
    this.router.navigate(['/pages/kycDetail'],
      { queryParams: { id : this.IList.id } });
  }
  ngOnInit() {
    this.getList();
    window.scroll(0, 0);
  }
}
