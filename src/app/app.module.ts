import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AccordionsComponent } from './accordions/accordions.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { PaginationComponent } from './pagination/pagination.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { CarouselComponent } from './carousel/carousel.component';
import { TabsComponent } from './tabs/tabs.component';
import {CustomLoginComponent} from './custom-login/custom-login.component';
import {CustomRegisterComponent} from './custom-register/custom-register.component';
import {AdminListComponent} from './admin-list/admin-list.component';
import {ResetPasswordComponent} from './admin-list/reset-password/reset-password.component';
import {RemoveFromRoleComponent} from './admin-list/remove-from-role/remove-from-role.component';
import {DetailComponent} from './admin-list/detail/detail.component';
import {AddToRoleComponent} from './admin-list/add-to-role/add-to-role.component';
import {CurrencyComponent} from './currency/currency.component';
import {KYCComponent} from './kyc/kyc.component';
import {KycDetailComponent} from './kyc/kyc-detail/kyc-detail.component';
import {MarketComponent} from './market/market.component';
import {MarketAddComponent} from './market/market-add/market-add.component';
import {MarketEditComponent} from './market/market-edit/market-edit.component';
import {SearchComponent} from './search/search.component';
import {TraderComponent} from './trader/trader.component';
import { HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ReportsComponent } from './reports/reports.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import { AddCurrencyComponent } from './currency/add-currency/add-currency.component';
import { EditCurrencyComponent } from './currency/edit-currency/edit-currency.component';
import { DetailCurrencyComponent } from './currency/detail-currency/detail-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    FormsComponent,
    ButtonsComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    AlertsComponent,
    AccordionsComponent,
    BadgesComponent,
    ProgressbarComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    DropdownComponent,
    TooltipsComponent,
    CarouselComponent,
    TabsComponent,
    CustomLoginComponent,
    CustomRegisterComponent,
    AdminListComponent,
    ResetPasswordComponent,
    RemoveFromRoleComponent,
    DetailComponent,
    AddToRoleComponent,
    CurrencyComponent,
    KYCComponent,
    KycDetailComponent,
    MarketComponent,
    MarketAddComponent,
    MarketEditComponent,
    SearchComponent,
    TraderComponent,
    ReportsComponent,
    AddCurrencyComponent,
    EditCurrencyComponent,
    DetailCurrencyComponent
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
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
