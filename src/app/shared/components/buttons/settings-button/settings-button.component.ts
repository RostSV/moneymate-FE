import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-settings-button',
  standalone: true,
  imports: [],
  templateUrl: './settings-button.component.html'
})
export class SettingsButtonComponent {
  @Output() settingsEvent = new EventEmitter();
}
