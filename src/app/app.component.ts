import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoriesModule } from './features/category/categories.module';
import { AccountModule } from './features/account/account.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { TimeDatePipe } from './shared/time-date.pipe';
import {LandingPageComponent} from "./core/components/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    CategoriesModule,
    AccountModule,
    NgxChartsModule,
    TimeDatePipe,
    NgxChartsModule,
    LandingPageComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
