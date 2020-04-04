import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import {FormsComponent} from '../forms/forms.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AdminListComponent} from '../admin-list/admin-list.component';
import {CurrencyComponent} from '../currency/currency.component';
import {KYCComponent} from '../kyc/kyc.component';
import {MarketComponent} from '../market/market.component';
import {TraderComponent} from '../trader/trader.component';
import {ReportsComponent} from '../reports/reports.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {ButtonsComponent} from '../buttons/buttons.component';
import {TablesComponent} from '../tables/tables.component';
import {IconsComponent} from '../icons/icons.component';
import {TypographyComponent} from '../typography/typography.component';
import {AlertsComponent} from '../alerts/alerts.component';
import {AccordionsComponent} from '../accordions/accordions.component';
import {BadgesComponent} from '../badges/badges.component';
import {ProgressbarComponent} from '../progressbar/progressbar.component';
import {BreadcrumbsComponent} from '../breadcrumbs/breadcrumbs.component';
import {PaginationComponent} from '../pagination/pagination.component';
import {DropdownComponent} from '../dropdown/dropdown.component';
import {TooltipsComponent} from '../tooltips/tooltips.component';
import {CarouselComponent} from '../carousel/carousel.component';
import {TabsComponent} from '../tabs/tabs.component';
import {NavbarComponent} from '../navbar/navbar.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {FooterComponent} from '../footer/footer.component';
import {DetailComponent} from '../admin-list/detail/detail.component';
import {KycDetailComponent} from '../kyc/kyc-detail/kyc-detail.component';
import {MarketAddComponent} from '../market/market-add/market-add.component';
import {MarketEditComponent} from '../market/market-edit/market-edit.component';
import {SearchComponent} from '../search/search.component';
import {AddCurrencyComponent} from '../currency/add-currency/add-currency.component';
import {EditCurrencyComponent} from '../currency/edit-currency/edit-currency.component';
import {DetailCurrencyComponent} from '../currency/detail-currency/detail-currency.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {ReportsTradesComponent} from '../reports-trades/reports-trades.component';
import {ReportsTransactionsComponent} from '../reports-transactions/reports-transactions.component';


@NgModule({
  declarations: [
    PagesComponent,
    FormsComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
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
    AdminListComponent,
    DetailComponent,
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
    DetailCurrencyComponent,
    ReportsTradesComponent,
    ReportsTransactionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    FormsModule,
    NgbModule,
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
  ],
  exports: [
    PagesComponent,
    FormsComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
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
    AdminListComponent,
    DetailComponent,
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
    DetailCurrencyComponent,
    ReportsTradesComponent,
    ReportsTransactionsComponent
  ]
})
export class PagesModule { }
