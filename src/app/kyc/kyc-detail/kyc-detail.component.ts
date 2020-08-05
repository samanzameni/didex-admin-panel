import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pending} from '../../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../../@core/KYC/kyc.service';
import {Information} from '../../@core/KYC/information';
import {NgxSpinnerService} from 'ngx-spinner';
import {Image} from '../../@core/KYC/image.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {KycReject} from '../../@core/KYC/kyc-reject';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReportsQuery} from '../../@core/Reports/reports-query';
import {HistoryKYC} from '../../@core/KYC/history-kyc';
import {TraderStatus} from '../../@core/Trader/trader-status.enum';

@Component({
  selector: 'app-kyc-detail',
  templateUrl: './kyc-detail.component.html',
  styleUrls: ['./kyc-detail.component.scss'],
})
export class KycDetailComponent implements OnInit {
  userList: Pending;
  userInformation: Information;
  userInformationNull: Information;
  modalImage: string;
  image = Image;
  KQueryParam: number;
  SQueryParam: number;
  noteReject: KycReject;
  KYCForm: FormGroup;
  query: ReportsQuery;
  traderHistory: HistoryKYC[];
  status = TraderStatus;
  constructor(private toastrService: ToastrService, private kycService: KYCService, private formBuilder: FormBuilder,
              private ngxShowLoader: NgxSpinnerService, private router: ActivatedRoute, private  route: Router) {
    this.userInformation = {
      personalInformation: {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        birthCountryCode: null,
        addressLine1: null,
        addressLine2: null,
        countryCode: null,
        zipCode: null,
        city: null,
  },
      mobileNumber: {
        mobileNumber: null,
        countryTelephoneCode: null,
        code: null,
    },
      kycImages: [
        {
          image: null,
          imageType: null,
        },
                ],
      email: null,
    };
    this.userInformationNull = {
      personalInformation: {
        firstName: null,
        lastName: null,
        dateOfBirth: null,
        birthCountryCode: null,
        addressLine1: null,
        addressLine2: null,
        countryCode: null,
        zipCode: null,
        city: null,
      },
      mobileNumber: {
        mobileNumber: null,
        countryTelephoneCode: null,
        code: null,
      },
      kycImages: [
        {
          image: null,
          imageType: null,
        },
      ],
      email: null,
    };
    this.userList = {
    id: null,
    };
    this.noteReject = {
      note: null,
    };
    this.query = {
      TraderId: null,
      Limit: 1,
    };
    this.createForm();
  }
  createForm() {
    this.KYCForm = this.formBuilder.group({
      note: ['', Validators.required ],
    });
  }
  getApprove() {
    this.ngxShowLoader.show();
    return this.kycService.getListApprove(this.userList.id).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/kyc']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Approved KYC.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Error In Process.', '', {timeOut: 4000});
      },
    );
  }
  getReject() {
    this.ngxShowLoader.show();
    return this.kycService.postListReject(this.userList.id , this.noteReject).subscribe(
      (res: any) => {
        console.log(res);
        this.noteReject.note = null;
        this.route.navigate(['/pages/kyc']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Rejected KYC.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Error In Process.', '', {timeOut: 4000});
      },
    );
  }
  clean() {
    this.noteReject.note = null;
  }
  getInformation() {
    this.ngxShowLoader.show();
    return this.kycService.getTraderInformation(this.KQueryParam).subscribe(
      (res: any) => {
        console.log(res);
        this.userInformationNull = res;
        if (this.userInformationNull.personalInformation != null) {
          this.userInformation.personalInformation = this.userInformationNull.personalInformation;
        }
        if (this.userInformationNull.mobileNumber != null) {
          this.userInformation.mobileNumber = this.userInformationNull.mobileNumber;
        }
        if (this.userInformationNull.kycImages != null) {
          this.userInformation.kycImages = this.userInformationNull.kycImages;
        }
        if (this.userInformationNull.email != null) {
          this.userInformation.email = this.userInformationNull.email;
        }
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  getI(i) {
    this.modalImage = i;
  }

  getHistory() {
    this.ngxShowLoader.show();
    return this.kycService.getTraderStatusHistory(this.query).subscribe(
      (res: any) => {
        console.log(res);
        this.traderHistory = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.KQueryParam = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    this.SQueryParam = parseFloat(this.router.snapshot.queryParamMap.get('status'));
    this.getInformation();
    this.userList.id = this.KQueryParam;
    this.query.TraderId = this.KQueryParam;
    this.getHistory();
    window.scroll(0, 0);
  }

}
