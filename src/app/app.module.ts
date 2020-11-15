import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CustomLoginComponent } from './custom-login/custom-login.component';
import { CustomRegisterComponent } from './custom-register/custom-register.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PagesModule } from './pages/pages.module';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaFormsModule, RecaptchaModule, RecaptchaV3Module} from 'ng-recaptcha';
import { TwoFactorLoginComponent } from './two-factor-login/two-factor-login.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomLoginComponent,
    CustomRegisterComponent,
    TwoFactorLoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    PagesModule,
    NgxSpinnerModule,
    RecaptchaV3Module,
    RecaptchaFormsModule,
  ],
  providers: [
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LcgguIUAAAAAE1GXYfJd7z-uEah67Dd9kTgWcpz' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
