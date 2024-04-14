import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CategoryItemComponent} from "./category-item/category-item.component";
import {CategoryListComponent} from "./category-list/category-list.component";
import {CreateCategoryFormComponent} from "./form-modal/create-category-form.component";

import {ReactiveFormsModule} from "@angular/forms";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {SectionContainerComponent} from "../../core/components/section-container/section-container.component";
import {SectionTopbarComponent} from "../../core/components/section-topbar/section-topbar.component";


@NgModule({
  declarations: [CategoryItemComponent, CategoryListComponent, CreateCategoryFormComponent],
  exports: [
    CategoryItemComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModule,
    SectionContainerComponent,
    SectionTopbarComponent
  ]
})
export class CategoriesModule { }
