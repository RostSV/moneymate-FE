import { Component } from '@angular/core';
import {NavbarComponent} from "../../core/components/navbar/navbar.component";
import {NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    NgClass,
    NgIf,
    RouterLink
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

}
