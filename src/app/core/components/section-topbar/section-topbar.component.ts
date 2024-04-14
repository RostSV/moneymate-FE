import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-section-topbar',
  standalone: true,
    imports: [
        NgOptimizedImage
    ],
  templateUrl: './section-topbar.component.html'
})
export class SectionTopbarComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() titleImgUrl: string = '';
  @Input() addButtonText: string = '';

  @Output() add = new EventEmitter<void>();
}

