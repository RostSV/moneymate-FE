import {Component, EventEmitter, HostListener, Input, Output} from "@angular/core";
import {CategoryModel} from "../../../shared/models/category.model";


@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html'
})
export class CategoryItemComponent {
  isMobile: boolean = false;
  isTablet: boolean = false;
  @Input() category!: CategoryModel;
  @Output() deleteCategory = new EventEmitter<CategoryModel>();
  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.isTablet = window.innerWidth >= 768;
  }

  onDelete() {
    this.deleteCategory.emit(this.category);
  }
}
