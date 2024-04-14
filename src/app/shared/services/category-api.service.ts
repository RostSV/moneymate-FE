import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CategoryModel} from "../models/category.model";
import {map} from "rxjs";
import {CategoryItemComponent} from "../../features/category/category-item/category-item.component";

@Injectable({
  providedIn: 'root'
})
export class CategoryApiService {
  // apiUrl = environment.beUrl + '/categories';
  apiUrl = 'http://localhost:9090/api/v1/categories';
  constructor(private http: HttpClient) {
  }

  getCategories() {
    return this.http.get<CategoryModel[]>(this.apiUrl);
  }

  addCategory(category: CategoryModel) {
    return this.http.post<CategoryModel>(this.apiUrl, category);
  }

  checkIfCategoryExists(name: string) {
    return this.getCategories().pipe(
      map( categories => categories
        .filter(category => category.name === name).length > 0)
    )
  }

  deleteCategory($event: CategoryModel) {
    return this.http.delete<CategoryItemComponent>(this.apiUrl + '/' + $event.id);
  }
}
