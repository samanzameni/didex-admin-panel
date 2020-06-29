import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {CurrencyService} from '../../@core/Currency/currency.service';
import {NgxSpinnerService} from 'ngx-spinner';
import {BlockChainNetworks} from '../../@core/Currency/block-chain-networks.enum';
import {Currency} from '../../@core/Currency/currency';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-currency',
  templateUrl: './add-currency.component.html',
  styleUrls: ['./add-currency.component.scss']
})
export class AddCurrencyComponent implements OnInit {
  cryPost: Currency;
  currencyForm: FormGroup;
  constructor(private toastrService: ToastrService, private currency: CurrencyService, private route: Router,
              private ngxShowLoader: NgxSpinnerService, private formBuilder: FormBuilder) {
    this.createForm();
    this.cryPost = {
      shortName: null,
      name: null,
      network: BlockChainNetworks.NotBlockChain,
      crypto: false,
      enabled: false,
      payinEnabled: false,
      payinConfirmations: null,
      payoutEnabled: false,
      transferEnabled: false,
      payoutFee: null,
      minWithdraw: null,
      minDeposit: null,
    };
  }
  createForm() {
    this.currencyForm = this.formBuilder.group({
      shortName: ['', Validators.required ],
      name: ['', Validators.required ],
      payinConfirmations: ['', [Validators.required, Validators.min(0)]],
      payoutFee: ['', [Validators.required, Validators.min(0)] ],
      minWithdraw: ['', [ Validators.min(0)] ],
      minDeposit: ['', [ Validators.min(0)] ],
    });
  }
  addCurrency() {
    this.ngxShowLoader.show();
    return this.currency.currencyPost(this.cryPost).subscribe(
      (res: any) => {
        console.log(res);
        this.route.navigate(['/pages/currency']);
        this.ngxShowLoader.hide();
        this.toastrService.success('You Have Successfully Add Currency.', '', {timeOut: 4000});
      },
      err => {
        console.log(err);
        this.ngxShowLoader.hide();
        this.toastrService.error('Invalid Inputs', '', {timeOut: 4000});
      },
    );
  }
  get fields(): string[] {
    const f = BlockChainNetworks;
    const keys = Object.keys(f);
    return keys.slice(keys.length / 2);
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
