import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {MarketingService} from '../@core/Marketing/marketing.service';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {Setting} from '../@core/Marketing/setting';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {
  chartForm: FormGroup;
  setting: Setting;
  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private marketingService: MarketingService,
              private router: Router, private ngxShowLoader: NgxSpinnerService) {
    this.setting = {
      volume24h: null,
     volume7d: null,
     users: null,
    };
    this.createForm();
  }
  createForm() {
    this.chartForm = this.formBuilder.group({
      user: ['', [Validators.required, Validators.min(0)] ],
      day: ['', [Validators.required, Validators.min(0)] ],
      hour: ['', [Validators.required, Validators.min(0)]],
    });
  }
  showSetting() {
    this.ngxShowLoader.show();
    return this.marketingService.settingGet().subscribe(
      (res: any) => {
        console.log(res);
        this.setting = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  putSetting() {
    this.ngxShowLoader.show();
    return this.marketingService.settingPut(this.setting).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add Setting.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    this.showSetting();
  }

}
