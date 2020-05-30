import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component';
import {FormsComponent} from '../forms/forms.component';
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
import {AdminListComponent} from '../admin-list/admin-list.component';
import {CurrencyComponent} from '../currency/currency.component';
import {KYCComponent} from '../kyc/kyc.component';
import {MarketComponent} from '../market/market.component';
import {TraderComponent} from '../trader/trader.component';
import {ReportsComponent} from '../reports/reports.component';
import {ReportsTradesComponent} from '../reports-trades/reports-trades.component';
import {ReportsTransactionsComponent} from '../reports-transactions/reports-transactions.component';
import {DetailComponent} from '../admin-list/detail/detail.component';
import {AddCurrencyComponent} from '../currency/add-currency/add-currency.component';
import {EditCurrencyComponent} from '../currency/edit-currency/edit-currency.component';
import {DetailCurrencyComponent} from '../currency/detail-currency/detail-currency.component';
import {KycDetailComponent} from '../kyc/kyc-detail/kyc-detail.component';
import {MarketAddComponent} from '../market/market-add/market-add.component';
import {MarketEditComponent} from '../market/market-edit/market-edit.component';
import {InvestmentFundComponent} from '../investment-fund/investment-fund.component';
import {AddInvestmentComponent} from '../investment-fund/add-investment/add-investment.component';
import {EditInvestmentComponent} from '../investment-fund/edit-investment/edit-investment.component';
import {DetailInvestmentComponent} from '../investment-fund/detail-investment/detail-investment.component';
import {TraderUserInvestComponent} from '../trader/trader-user-invest/trader-user-invest.component';


const routes: Routes = [
  {
    path: '' , component: PagesComponent , children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'adminList', component: AdminListComponent },
      { path: 'adminListDetail', component: DetailComponent},
      { path: 'currency', component: CurrencyComponent },
      { path: 'currencyAdd', component: AddCurrencyComponent},
      { path: 'currencyEdit', component: EditCurrencyComponent},
      { path: 'currencyDetail', component: DetailCurrencyComponent},
      { path: 'kyc', component: KYCComponent },
      { path: 'kycDetail', component: KycDetailComponent},
      { path: 'market', component: MarketComponent },
      { path: 'marketAdd', component: MarketAddComponent},
      { path: 'marketEdit', component: MarketEditComponent},
      { path: 'trader', component: TraderComponent },
      { path: 'investmentFund', component: InvestmentFundComponent },
      { path: 'addInvestmentFund', component:  AddInvestmentComponent},
      { path: 'editInvestmentFund', component: EditInvestmentComponent },
      { path: 'detailInvestmentFund', component: DetailInvestmentComponent },
      { path: 'userInvest', component: TraderUserInvestComponent },
      { path: 'reportsOrders', component: ReportsComponent },
      { path: 'reportsTrades', component: ReportsTradesComponent },
      { path: 'reportsTransactions', component: ReportsTransactionsComponent },
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
      { path: 'dropDowns', component: DropdownComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'carousel', component: CarouselComponent },
      { path: 'tabs', component: TabsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
