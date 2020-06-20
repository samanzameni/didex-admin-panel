import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pending} from '../../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../../@core/KYC/kyc.service';
import {Information} from '../../@core/KYC/information';
import {NgxSpinnerService} from 'ngx-spinner';
import {Image} from '../../@core/KYC/image.enum';
import {ActivatedRoute, Router} from '@angular/router';
import {KycReject} from '../../@core/KYC/kyc-reject';

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
  noteReject: KycReject;
  constructor(private toastrService: ToastrService, private kycService: KYCService,
              private ngxShowLoader: NgxSpinnerService, private router: ActivatedRoute) {
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
  }

  getApprove() {
    this.ngxShowLoader.show();
    return this.kycService.getListApprove(this.userList.id).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Get Approve.', '', {timeOut: 4000});
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
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Reject.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Error In Process.', '', {timeOut: 4000});
      },
    );
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
  ngOnInit() {
    this.KQueryParam = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    this.getInformation();
    this.userList.id = this.KQueryParam;
    window.scroll(0, 0);
  }

}
