import {CommonModule, NgOptimizedImage} from '@angular/common';
import {AccountItemComponent} from "./account-item/account-item.component";
import {AccountPageComponent} from "./account-page/account-page.component";
import {SectionContainerComponent} from "../../core/components/section-container/section-container.component";
import {AccountInfoComponent} from "./account-info/account-info.component";
import {SectionTopbarComponent} from "../../core/components/section-topbar/section-topbar.component";
import {CreateAccountFormComponent} from "./create-account-form/create-account-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";
import {PieChartModule} from "@swimlane/ngx-charts";
import {TimeDatePipe} from "../../shared/time-date.pipe";
import {AddingButtonComponent} from "../../shared/components/buttons/adding-button/adding-button.component";
import {SettingsButtonComponent} from "../../shared/components/buttons/settings-button/settings-button.component";
import {
  TransactionsListComponent
} from "../../shared/components/transaction/transactions-list/transactions-list.component";
import {PieChartComponent} from "../../shared/components/charts/pie-chart/pie-chart.component";
import {SimplePieChartComponent} from "../../shared/components/charts/simple-pie-chart/simple-pie-chart.component";
import {HorizontalChartComponent} from "../../shared/components/charts/horizontal-chart/horizontal-chart.component";
import {BalanceComponent} from "../../shared/components/common/balance/balance.component";
import {AccountListComponent} from "./account-list/account-list.component";



@NgModule({
  declarations: [
    AccountItemComponent,
    AccountPageComponent,
    AccountInfoComponent,
    AccountListComponent,
    CreateAccountFormComponent,
  ],
  exports: [
    AccountPageComponent,
    AccountItemComponent,
    AccountListComponent
  ],
  imports: [
    CommonModule,
    SectionContainerComponent,
    SectionTopbarComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PieChartModule,
    NgOptimizedImage,
    TimeDatePipe,
    AddingButtonComponent,
    SettingsButtonComponent,
    TransactionsListComponent,
    PieChartComponent,
    SimplePieChartComponent,
    HorizontalChartComponent,
    BalanceComponent,
  ]
})
export class AccountModule { }
