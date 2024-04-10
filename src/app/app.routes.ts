import { Routes } from '@angular/router';
import {LandingPageComponent} from "./core/components/landing-page/landing-page.component";
import {HomeComponent} from "./features/home/home.component";
import {CategoriesComponent} from "./features/categories/categories.component";

export const routes: Routes = [
  {path: 'welcome', component: LandingPageComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'categories', component: CategoriesComponent}
];
