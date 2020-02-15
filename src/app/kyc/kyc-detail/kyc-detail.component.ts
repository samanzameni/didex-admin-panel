import {Component, Input, OnInit} from '@angular/core';
import {Pending} from '../../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../../@core/KYC/kyc.service';
import {Information} from '../../@core/KYC/information';

@Component({
  selector: 'app-kyc-detail',
  templateUrl: './kyc-detail.component.html',
  styleUrls: ['./kyc-detail.component.scss'],
})
export class KycDetailComponent implements OnInit {
  @Input() userList: Pending;
  userInformation: Information;
  modalImage: string;
  constructor(private toastrService: ToastrService, private kycService: KYCService) {
    this.userInformation = {
      personalInformation: {
        firstName: '',
    lastName: '',
    dateOfBirth: '',
    birthCountryCode: '',
    addressLine1: '',
    addressLine2: '',
    countryCode: '',
    zipCode: '',
    city: '',
  },
    mobileNumber: {
      mobileNumber: '',
      countryTelephoneCode: '',
    },
      kycImages: [
        {
          image: '',
          imageType: 0,
        },
                ],
    email: '',
    };
  }

  getApprove() {
    return this.kycService.getListApprove(this.userList.id).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You Have Successfully Get Approve.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.toastrService.error('Error In Process.', '', {timeOut: 4000});
      },
    );
  }
  getInformation() {
    return this.kycService.getTraderInformation(this.userList.id).subscribe(
      (res: any) => {
        console.log(res);
        this.userInformation = res;
      },
      err => {
        console.log(err);
      },
    );
  }
  getI(i) {
    this.modalImage = i;
  }
  ngOnInit() {
    this.getInformation();
  }

}
