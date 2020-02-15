import { Component, OnInit } from '@angular/core';
import {Login} from '../@core/Login/login';
import {AuthServiceService} from '../@core/Login/auth-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-custom-register',
  templateUrl: './custom-register.component.html',
  styleUrls: ['./custom-register.component.scss'],
})
export class CustomRegisterComponent implements OnInit {
  register: Login;
  registerForm: FormGroup;
  constructor(private authService: AuthServiceService, private formBuilder: FormBuilder) {
    this.register = {
      email: '',
      password: '',
      phoneNumber: '',
      country: '',
      fullName: '',
    };
    this.createForm();
  }
  createForm() {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required ],
      password: ['', [Validators.required ,
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\\d$@$!%*?&].{8,}') ]],
      phoneNumber: ['', Validators.required ],
      country: ['', Validators.required ],
      fullName: ['', Validators.required ],
    });
  }
  emailChange(event) {
    this.register.email = event.target.value;
  }

  passChange(event) {
    this.register.password = event.target.value;
  }
  fullNameChange(event) {
    this.register.fullName = event.target.value;
  }

  countryChange(event) {
    this.register.country = event.target.value;
  }
  phoneNumberChange(event) {
    this.register.phoneNumber = event.target.value;
  }
  userRegister() {
      this.authService.registerPost(this.register);
  }
  ngOnInit() {
  }

}
