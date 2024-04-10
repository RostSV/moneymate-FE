import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UserService} from "./user.service";
import {UserModel} from "./shared/models/user.model";
import {Observable} from "rxjs";
import {NavbarComponent} from "./core/components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {

}
