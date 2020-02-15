import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AuthServiceService} from '../@core/Login/auth-service.service';
import {Login} from '../@core/Login/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
})
export class CustomLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  login: Login;
  constructor(private authService: AuthServiceService, private toastrService: ToastrService,
              private formBuilder: FormBuilder) {
    this.login = {
      email: '',
      password: '',
    };
    this.createForm();
  }
  createForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', Validators.required ],
    });
  }

  emailChange(event) {
    this.login.email = event.target.value;
  }

  passChange(event) {
    this.login.password = event.target.value;
  }

  userLogin() {
    this.submitted = true;
      this.authService.loginPost(this.login);
  }
  ngOnInit() {
  }
}
