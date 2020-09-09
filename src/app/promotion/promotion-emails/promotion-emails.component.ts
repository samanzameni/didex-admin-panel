import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {MarketingService} from '../../@core/Marketing/marketing.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {UserPromotion} from '../../@core/Marketing/user-promotion';

@Component({
  selector: 'app-promotion-emails',
  templateUrl: './promotion-emails.component.html',
  styleUrls: ['./promotion-emails.component.scss']
})
export class PromotionEmailsComponent implements OnInit {
  IQueryParam: number;
  userPromotion: UserPromotion[];
  constructor(private router: ActivatedRoute, private formBuilder: FormBuilder, private toastrService: ToastrService,
              private marketingService: MarketingService, private ngxShowLoader: NgxSpinnerService) {
  }
  showUserPromotion() {
    this.ngxShowLoader.show();
    return this.marketingService.promotionIDGet(this.IQueryParam).subscribe(
      (res: any) => {
        console.log(res);
        this.userPromotion = res;
        this.ngxShowLoader.hide();
      },
      (err) => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  ngOnInit() {
    this.IQueryParam = parseFloat(this.router.snapshot.queryParamMap.get('id'));
    this.showUserPromotion();
  }

}
