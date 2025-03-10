import {Component, TemplateRef} from '@angular/core';
import {AsyncPipe, NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Observable} from "rxjs";
import {UserModel} from "../../../shared/models/user.model";
import {UserService} from "../../../user.service";
import {
  NgbDropdown,
  NgbDropdownItem,
  NgbDropdownMenu,
  NgbDropdownToggle,
  NgbOffcanvas
} from "@ng-bootstrap/ng-bootstrap";
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
  user$: Observable<UserModel | undefined>;
  constructor(private userService: UserService,
              private offcanvasService: NgbOffcanvas) {
    this.user$ = userService.getUserChanges();
  }

  toggleSidebar(content: TemplateRef<any>) {
    this.offcanvasService.open(content, { position: 'top' });

  }

  logout() {
    if(this.offcanvasService.hasOpenOffcanvas()){
      this.offcanvasService.dismiss();
    }
    this.userService.logout();
  }
}
