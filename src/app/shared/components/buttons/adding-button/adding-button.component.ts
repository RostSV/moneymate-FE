import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-adding-button',
  standalone: true,
  imports: [],
  templateUrl: './adding-button.component.html'
})
export class AddingButtonComponent {
  @Input()
  label: string = '';
  @Output()
  newItemEvent = new EventEmitter();

  onButtonClick() {
    this.newItemEvent.emit();
  }
}
