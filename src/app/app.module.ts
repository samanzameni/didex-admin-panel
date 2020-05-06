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
import {RecaptchaModule} from 'ng-recaptcha';
import { InvestmentFundComponent } from './investment-fund/investment-fund.component';
import { AddInvestmentComponent } from './investment-fund/add-investment/add-investment.component';
import { EditInvestmentComponent } from './investment-fund/edit-investment/edit-investment.component';
import { DetailInvestmentComponent } from './investment-fund/detail-investment/detail-investment.component';
import { TraderUserInvestComponent } from './trader/trader-user-invest/trader-user-invest.component';
import { UserInvestRecordsComponent } from './trader/trader-user-invest/user-invest-records/user-invest-records.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomLoginComponent,
    CustomRegisterComponent,


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
    RecaptchaModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
