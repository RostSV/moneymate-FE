import { Component } from '@angular/core';
import {SectionContainerComponent} from "../../core/components/section-container/section-container.component";
import {BehaviorSubject, Observable, switchMap} from "rxjs";
import {CategoryApiService} from "../../shared/services/category-api.service";
import {CategoryModel} from "../../shared/models/category.model";
import {CategoryComponent} from "../../shared/components/category/category.component";
import {AsyncPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormModalComponent} from "../../shared/components/form-modal/form-modal.component";
import {SectionTopbarComponent} from "../../core/components/section-topbar/section-topbar.component";

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [
    SectionContainerComponent,
    CategoryComponent,
    NgForOf,
    AsyncPipe,
    NgOptimizedImage,
    SectionTopbarComponent,
  ],
  templateUrl: './categories.component.html'
})
export class CategoriesComponent {

  title: string = 'Categories';
  subtitle: string = 'Track your transactions effortlessly with the power of categorized spending.';
  titleImgUrl: string = '../assets/media/categories.png';

  categories$: Observable<CategoryModel[]>;
  refreshSubject = new BehaviorSubject(undefined);


  constructor(private categoryService: CategoryApiService, private modalService: NgbModal) {
    this.categories$ = this.refreshSubject.pipe(switchMap(() => this.categoryService.getCategories()));
  }

  onNewCategoryClick() {
    this.modalService.open(FormModalComponent, { centered: true })
      .result.then(() => this.refreshSubject.next(undefined));
}}
