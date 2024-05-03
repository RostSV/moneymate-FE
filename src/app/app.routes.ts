import { Routes } from '@angular/router';
import {LandingPageComponent} from "./core/components/landing-page/landing-page.component";
import {HomeComponent} from "./features/home/home.component";
import {CategoryListComponent} from "./features/category/category-list/category-list.component";
import {AccountPageComponent} from "./features/account/account-page/account-page.component";
import {AccountInfoComponent} from "./features/account/account-info/account-info.component";
import {NotfoundComponent} from "./core/components/notfound/notfound.component";

export const routes: Routes = [
  {path: 'welcome', component: LandingPageComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoryListComponent},
  {path: 'accounts', component: AccountPageComponent},
  {path: 'accounts/:id', component: AccountInfoComponent},
  {path: '**', component: NotfoundComponent}
];
