import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {Currency} from '../../@core/Currency/currency';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-currency',
  templateUrl: './edit-currency.component.html',
  styleUrls: ['./edit-currency.component.scss']
})
export class EditCurrencyComponent implements OnInit {
  SNCurrency: Currency;
  USN: string;
  currencyForm: FormGroup;
  constructor(private toastrService: ToastrService, private currency: CurrencyService, private formBuilder: FormBuilder,
              private ngxShowLoader: NgxSpinnerService, private router: ActivatedRoute, private route: Router) {
    this.createForm();
    this.SNCurrency = {
      shortName: null,
      name: null,
      network: null,
      crypto: null,
      enabled: null,
      payinEnabled: null,
      payinConfirmations: null,
      payoutEnabled: null,
      transferEnabled: null,
      payoutFee: null,
      minWithdraw: null,
      minDeposit: null,
    };
  }
  createForm() {
    this.currencyForm = this.formBuilder.group({
      shortName: ['', Validators.required ],
      name: ['', Validators.required ],
      payinConfirmations: ['', [Validators.required, Validators.min(0)] ],
      payoutFee: ['', [Validators.required, Validators.min(0)]],
      minWithdraw: ['', [ Validators.min(0)]],
      minDeposit: ['', [ Validators.min(0)]],
      network: [''],
      payoutEnabled: [''],
      transferEnabled: [''],
      payinEnabled: [''],
      enabled: [''],
      crypto: [''],
    });
  }
  showShortName(shortName: string) {
    this.ngxShowLoader.show();
    return this.currency.shortNameGet(shortName).subscribe(
      (res: any) => {
        console.log(res);
        this.SNCurrency = res;
        this.ngxShowLoader.hide();
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
      },
    );
  }
  updateSHortName() {
    this.ngxShowLoader.show();
    return this.currency.shortNamePut(this.USN , this.SNCurrency).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/currency']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Update Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs.', '', {timeOut: 4000});
      },
    );
  }
  get fields(): string[] {
    const f = BlockChainNetworks;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    this.USN = this.router.snapshot.queryParamMap.get('shortName');
    this.showShortName(this.USN);
    window.scroll(0, 0);
  }

}
