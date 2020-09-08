import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {NgxSpinnerService} from 'ngx-spinner';
import {MarketingService} from '../@core/Marketing/marketing.service';
import {Promotion} from '../@core/Marketing/promotion';
import {AddUserPromotion} from '../@core/Marketing/add-user-promotion';

@Component({
  selector: 'app-promotion',
  templateUrl: './promotion.component.html',
  styleUrls: ['./promotion.component.scss']
})
export class PromotionComponent implements OnInit {
  promotionForm: FormGroup;
  promotionList: Promotion[];
  promotion: AddUserPromotion;
  promotionId: number;
  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private marketingService: MarketingService,
              private router: Router, private ngxShowLoader: NgxSpinnerService) {
    this.promotion = {
      email: null,
    };
    this.createForm();
  }
  createForm() {
    this.promotionForm = this.formBuilder.group({
      promotion: ['', Validators.required ],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  showPromotion() {
    this.ngxShowLoader.show();
    return this.marketingService.promotionGet().subscribe(
      (res: any) => {
        console.log(res);
        this.promotionList = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  postPromotion() {
    this.ngxShowLoader.show();
    return this.marketingService.promotionIDPost(this.promotionId , this.promotion).subscribe(
      (res: any) => {
        console.log(res);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add Promotion.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  marketingUser() {
    this.router.navigate(['/pages/promotionEmails'],
      { queryParams: { id: this.promotionId } });
  }
  ngOnInit() {
    this.showPromotion();
  }

}
