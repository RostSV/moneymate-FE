import { Component } from '@angular/core';
import { BehaviorSubject, Observable, switchMap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateCategoryFormComponent } from '../form-modal/create-category-form.component';
import { CategoryModel } from '../../../shared/models/category.model';
import { CategoryApiService } from '../../../shared/services/category-api.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent {
  title: string = 'Categories';
  subtitle: string =
    'Track your transactions effortlessly with the power of categorized spending.';
  titleImgUrl: string = 'assets/media/categories.png';
  buttonTitle: string = 'New Category';

  categories$: Observable<CategoryModel[]>;
  refreshSubject = new BehaviorSubject(undefined);

  constructor(
    private categoryService: CategoryApiService,
    private modalService: NgbModal,
  ) {
    this.categories$ = this.refreshSubject.pipe(
      switchMap(() => this.categoryService.getCategories()),
    );
  }

  onNewCategoryClick() {
    this.modalService
      .open(CreateCategoryFormComponent, { centered: true })
      .result.then(() => this.refreshSubject.next(undefined));
  }

  onDelete($event: CategoryModel) {
    this.categoryService
      .deleteCategory($event)
      .subscribe(() => this.refreshSubject.next(undefined));
  }
}
