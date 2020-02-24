import { Component, OnInit } from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {AuthServiceService} from '../@core/Login/auth-service.service';
import {Login} from '../@core/Login/login';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-custom-login',
  templateUrl: './custom-login.component.html',
  styleUrls: ['./custom-login.component.scss'],
})
export class CustomLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  login: Login;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder,
              private router: Router, private authServiceService: AuthServiceService) {
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
    window.scroll(0, 0);
  }
}
