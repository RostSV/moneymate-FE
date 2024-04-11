import {Component, HostListener, Input} from '@angular/core';
import {CategoryModel} from "../../models/category.model";
import {NgbPopover} from "@ng-bootstrap/ng-bootstrap";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    NgbPopover,
    NgIf
  ],
  templateUrl: './category.component.html'
})
export class CategoryComponent {
  isMobile: boolean = false;
  isTablet: boolean = false;
  @Input() category!: CategoryModel;

  constructor() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
    this.isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  }

}
