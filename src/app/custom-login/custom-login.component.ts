import {Component, OnInit} from '@angular/core';
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
    };
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: [ '', [Validators.required , Validators.email]],
      password: [ '', Validators.required],
      reCaptcha: [ '', Validators.required],
    });
  }
  userLogin() {
      this.authService.loginPost(this.login);
  }
  eyeClick() {
    this.inputType = !this.inputType;
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.storageService.setCaptchaToken(captchaResponse);
  }
  ngOnInit() {
    window.scroll(0, 0);
  }

}
