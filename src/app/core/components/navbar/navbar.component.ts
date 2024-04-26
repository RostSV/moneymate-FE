import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {Observable} from "rxjs";
import {UserModel} from "../../../shared/models/user.model";
import {UserService} from "../../../user.service";
import {NgbDropdown, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import {SettingsButtonComponent} from "../../../shared/components/buttons/settings-button/settings-button.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgIf,
    NgClass,
    RouterLink,
    NgOptimizedImage,
    RouterLinkActive,
    AsyncPipe,
    NgbDropdown,
    NgbDropdownToggle,
    NgbDropdownMenu,
    NgbDropdownItem,
    SettingsButtonComponent,
  ],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent{
  isOpen: boolean = false;
  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  user$: Observable<UserModel | undefined>;
  constructor(private userService: UserService, private router: Router) {
    this.user$ = userService.getUserChanges();
  }

  logout() {
    this.userService.logout();
  }
}
