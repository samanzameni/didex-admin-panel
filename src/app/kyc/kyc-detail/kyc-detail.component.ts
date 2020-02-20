import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pending} from '../../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../../@core/KYC/kyc.service';
import {Information} from '../../@core/KYC/information';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-kyc-detail',
  templateUrl: './kyc-detail.component.html',
  styleUrls: ['./kyc-detail.component.scss'],
})
export class KycDetailComponent implements OnInit {
  @Input() userList: Pending;
  userInformation: Information;
  userInformationNull: Information;
  modalImage: string;
  message = true;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private toastrService: ToastrService, private kycService: KYCService, private ngxShowLoader: NgxSpinnerService) {
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
    this.ngxShowLoader.show();
    return this.kycService.getListApprove(this.userList.id).subscribe(
      (res: any) => {
        console.log(res);
        this.messageEvent.emit(this.message);
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
  getInformation() {
    this.ngxShowLoader.show();
    return this.kycService.getTraderInformation(this.userList.id).subscribe(
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
    this.getInformation();
    window.scroll(0, 0);
  }

}
