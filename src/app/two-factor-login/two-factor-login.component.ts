import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Factor} from '../@core/TwoFactor/factor';
import {AuthServiceService} from '../@core/Login/auth-service.service';

@Component({
  selector: 'app-two-factor-login',
  templateUrl: './two-factor-login.component.html',
  styleUrls: ['./two-factor-login.component.scss']
})
export class TwoFactorLoginComponent implements OnInit {
  twoFaForm: FormGroup;
  twoFaLogin: Factor;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder) {
    this.twoFaLogin = {
      code: null ,
      rememberMachine: true,
    };
    this.createForm();
  }
  userCode() {
    this.authService.codePost(this.twoFaLogin);
  }
  createForm() {
    this.twoFaForm = this.formBuilder.group({
      code: [ '', Validators.required ],
    });
  }
  ngOnInit() {
  }

}
