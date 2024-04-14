import { Routes } from '@angular/router';
import {LandingPageComponent} from "./core/components/landing-page/landing-page.component";
import {HomeComponent} from "./features/home/home.component";
import {CategoryListComponent} from "./features/category/category-list/category-list.component";
import {AccountListComponent} from "./features/account/account-list/account-list.component";
import {AccountInfoComponent} from "./features/account/account-info/account-info.component";

export const routes: Routes = [
  {path: 'welcome', component: LandingPageComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'accounts', component: AccountListComponent},
  {path: 'accounts/:id', component: AccountInfoComponent},
];
