import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {AuthServiceService} from '../@core/Login/auth-service.service';
import {Login} from '../@core/Login/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReCaptchaV3Service} from 'ng-recaptcha';
import {StorageService} from '../@core/Login/storage.service';


@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
})
export class CustomLoginComponent implements OnInit {
  loginForm: FormGroup;
  login: Login;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder,
               private storageService: StorageService) {
    this.login = {
      email: '',
      password: '',
    };
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required],
    });
  }

  userLogin() {

      this.authService.loginPost(this.login);
  }
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.storageService.setCaptchaToken(captchaResponse);
  }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
