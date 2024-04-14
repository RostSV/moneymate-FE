import { AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {CategoryApiService} from "../services/category-api.service";

export function categoryExistsValidator(categoryService: CategoryApiService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return categoryService.checkIfCategoryExists(control.value).pipe(
      map(exists => exists ? { categoryExists: true } : null)
    );
  };
}
