import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Pending} from '../../@core/KYC/pending';
import {ToastrService} from 'ngx-toastr';
import {KYCService} from '../../@core/KYC/kyc.service';
import {Information} from '../../@core/KYC/information';
import {NgxSpinnerService} from 'ngx-spinner';
import {Image} from '../../@core/KYC/image.enum';

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
  image = Image;
  @Output() messageEvent = new EventEmitter<boolean>();
  constructor(private toastrService: ToastrService, private kycService: KYCService, private ngxShowLoader: NgxSpinnerService) {
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
          this.userInformationNull.personalInformation.dateOfBirth = this.userInformationNull.personalInformation.dateOfBirth.split('T')[0];
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
