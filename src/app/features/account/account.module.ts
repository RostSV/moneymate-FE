import { CommonModule } from '@angular/common';
import {AccountItemComponent} from "./account-item/account-item.component";
import {AccountListComponent} from "./account-list/account-list.component";
import {SectionContainerComponent} from "../../core/components/section-container/section-container.component";
import {AccountInfoComponent} from "./account-info/account-info.component";
import {SectionTopbarComponent} from "../../core/components/section-topbar/section-topbar.component";
import {CreateAccountFormComponent} from "./create-account-form/create-account-form.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgModule} from "@angular/core";
import {PieChartModule} from "@swimlane/ngx-charts";



@NgModule({
  declarations: [
    AccountItemComponent,
    AccountListComponent,
    AccountInfoComponent,
    CreateAccountFormComponent,
  ],
  imports: [
    CommonModule,
    SectionContainerComponent,
    SectionTopbarComponent,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PieChartModule
  ]
})
export class AccountModule { }
