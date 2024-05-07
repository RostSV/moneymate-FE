import { Component } from '@angular/core';
import {SectionContainerComponent} from "../section-container/section-container.component";
import {Router} from "@angular/router";
import {UserService} from "../../../user.service";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [
    SectionContainerComponent
  ],
  templateUrl: './notfound.component.html'
})
export class NotfoundComponent {

  constructor(private router: Router, private userService : UserService) {
  }

  goHome() {
    if (this.userService.getUser()) {
      this.router.navigate(['/home']);
    }else {
      this.router.navigate(['/']);
    }
  }
}
