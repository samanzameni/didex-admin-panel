import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from '../@core/Login/auth-service.service';
import {Login} from '../@core/Login/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {StorageService} from '../@core/Login/storage.service';
import {ReCaptchaV3Service} from 'ng-recaptcha';


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
               private storageService: StorageService, private recaptchaV3Service: ReCaptchaV3Service) {
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
      // recaptcha: [ '', Validators.required],
    });
  }
  userLogin() {
      this.executeImportantAction();
      this.authService.loginPost(this.login);
  }
  eyeClick() {
    this.inputType = !this.inputType;
  }
  public executeImportantAction(): void {
    this.recaptchaV3Service.execute('importantAction')
      .subscribe((token) =>
        this.storageService.setCaptchaToken(token)
    );
  }

  ngOnInit() {
    window.scroll(0, 0);
  }

}
