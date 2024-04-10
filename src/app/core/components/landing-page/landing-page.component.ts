import { Component } from '@angular/core';
import {AsyncPipe, NgIf, NgOptimizedImage} from "@angular/common";
import {Observable} from "rxjs";
import {UserModel} from "../../../shared/models/user.model";
import {UserService} from "../../../user.service";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {NavbarComponent} from "../navbar/navbar.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    NgOptimizedImage,
    AsyncPipe,
    NgIf,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NavbarComponent,
  ],
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
  user$: Observable<UserModel | undefined>;

  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUserChanges();
  }

  login() {
    if(this.userService.isLoggedIn()){
      this.router.navigate(['/home']);
    }
    this.userService.login();
  }
}
