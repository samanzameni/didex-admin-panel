import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MarketList} from '../../@core/Market/market-list';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {MarketService} from '../../@core/Market/market.service';
import {MarketPut} from '../../@core/Market/market-put';

@Component({
  selector: 'app-market-edit',
  templateUrl: './market-edit.component.html',
  styleUrls: ['./market-edit.component.scss'],
})
export class MarketEditComponent implements OnInit {
  @Input() market: MarketList;
  marketPut: MarketPut;
  marketForm: FormGroup;
  editSubmitted: boolean;
  @Output() pageEvent = new EventEmitter<boolean>();
  constructor(private toastrService: ToastrService, private marketService: MarketService,
              private formBuilder: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.marketForm = this.formBuilder.group({
      takeLiquidityRate: ['', Validators.required ],
      provideLiquidityRate: ['', Validators.required ],
      tickSize: ['', Validators.required ],
      quantityIncrement: ['', Validators.required ],
    });
  }
  addSubmit() {
    this.editSubmitted = false;
    this.pageEvent.emit(this.editSubmitted);
    return this.marketService.symbolPut(this.marketPut.symbol, this.marketPut).subscribe(
      (res: any) => {
        console.log(res);
        this.toastrService.success('You Have Successfully Add To Market.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.toastrService.error('Take Liquidity Rate & Provide Liquidity Rate should be between 0 and 1.',
          '', {timeOut: 4000});
      },
    );
  }
  ngOnInit() {
    this.marketPut = this.market;
  }

}
