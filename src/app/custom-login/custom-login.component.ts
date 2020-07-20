import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthServiceService} from '../@core/Login/auth-service.service';
import {Login} from '../@core/Login/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../@core/Login/storage.service';


@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
})
export class CustomLoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;
  inputType = false;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder,
               private storageService: StorageService) {
    this.login = {
      email: null,
      password: null,
      reCaptcha: null
    };
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [ '', Validators.required ],
      password: [ '', Validators.required],
      reCaptcha: [ '', Validators.required],
    });
  }

  userLogin() {

      this.authService.loginPost(this.login);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.storageService.setCaptchaToken(captchaResponse);
    this.login.reCaptcha = captchaResponse;
  }
  eyeClick() {
  if (this.inputType === false) {
  this.inputType = true;
  } else {
    this.inputType = false;
  }
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
