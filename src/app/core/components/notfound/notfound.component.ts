import { Component } from '@angular/core';
import {SectionContainerComponent} from "../section-container/section-container.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [
    SectionContainerComponent
  ],
  templateUrl: './notfound.component.html'
})
export class NotfoundComponent {

  constructor(private router: Router) {
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
