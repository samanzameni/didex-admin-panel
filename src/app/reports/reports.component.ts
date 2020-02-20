import { Component, OnInit } from '@angular/core';
import {ReportsService} from '../@core/Reports/reports.service';
import {ToastrService} from 'ngx-toastr';
import {ReportsQuery} from '../@core/Reports/reports-query';
import {Reports} from '../@core/Reports/reports';
import {AdminService} from '../@core/Admin/admin.service';
import {NgxSpinnerService} from 'ngx-spinner';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
reports: ReportsQuery;
reportsRes: Reports[];
i: number;
  constructor(private reportsService: ReportsService, private toastrService: ToastrService, private ngxShowLoader: NgxSpinnerService) {
    this.reports = {
    TraderId : null,
    Symbol : null,
    Desc: null,
    FilterBy: null,
    From: null,
    Till: null,
    Offset: 20,
    Limit: 20,
    };
  }
  receiveId($event) {
    this.reports.TraderId = $event;
  }
  reportsGet() {
    this.ngxShowLoader.show();
    if (this.reports.FilterBy === 'timestamp' ) {
      if (this.reports.From != null) {
        this.reports.From = new Date(this.reports.From).toISOString();
        console.log(this.reports.From);
      }
      if (this.reports.Till != null) {
        this.reports.Till = new Date(this.reports.Till).toISOString();
      }
    }
    return this.reportsService.getReports(this.reports).subscribe(
      (res: any) => {
        console.log(res);
        this.reportsRes = res;
        // for (this.i = 0 ;  this.i <= this.reportsRes.length ; this.i++) {
        //   this.reportsRes[this.i].updatedAt = this.reportsRes[this.i].updatedAt.split('T')[0];
        //   this.reportsRes[this.i].expireTime = this.reportsRes[this.i].expireTime.split('T')[0];
        //   this.reportsRes[this.i].createdAt = this.reportsRes[this.i].createdAt.split('T')[0];
        // }
        this.reports.Till = null;
        this.reports.From = null;
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Get Reports.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
