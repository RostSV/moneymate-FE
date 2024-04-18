import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CategoryModel } from '../../../shared/models/category.model';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
})
export class CategoryItemComponent {
  isMobile: boolean = false;
  @Input() category!: CategoryModel;
  @Output() deleteCategory = new EventEmitter<CategoryModel>();

  onDelete() {
    this.deleteCategory.emit(this.category);
  }
}
