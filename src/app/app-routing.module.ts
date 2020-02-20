import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsComponent } from './forms/forms.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { TablesComponent } from './tables/tables.component';
import { IconsComponent } from './icons/icons.component';
import { TypographyComponent } from './typography/typography.component';
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
import {CurrencyComponent} from './currency/currency.component';
import {KYCComponent} from './kyc/kyc.component';
import {MarketComponent} from './market/market.component';
import {SearchComponent} from './search/search.component';
import {TraderComponent} from './trader/trader.component';
import {ReportsComponent} from './reports/reports.component';
import {DetailComponent} from './admin-list/detail/detail.component';
import {DetailCurrencyComponent} from './currency/detail-currency/detail-currency.component';
import {AddCurrencyComponent} from './currency/add-currency/add-currency.component';
import {EditCurrencyComponent} from './currency/edit-currency/edit-currency.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'tables', component: TablesComponent },
  { path: 'icons', component: IconsComponent },
  { path: 'typography', component: TypographyComponent },
  { path: 'alerts', component: AlertsComponent },
  { path: 'accordions', component: AccordionsComponent },
  { path: 'badges', component: BadgesComponent },
  { path: 'progressbar', component: ProgressbarComponent },
  { path: 'breadcrumbs', component: BreadcrumbsComponent },
  { path: 'pagination', component: PaginationComponent },
  { path: 'dropdowns', component: DropdownComponent },
  { path: 'tooltips', component: TooltipsComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'tabs', component: TabsComponent },
  { path: 'login', component: CustomLoginComponent },
  { path: 'register', component: CustomRegisterComponent },
  { path: 'adminList', component: AdminListComponent },
  { path: 'currency', component: CurrencyComponent },
  { path: 'kyc', component: KYCComponent },
  { path: 'market', component: MarketComponent },
  { path: 'trader', component: TraderComponent },
  { path: 'reports', component: ReportsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
