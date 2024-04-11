import {Component} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgIf} from "@angular/common";
import {categoryExistsValidator} from "./validator/custom.validator";
import {CategoryApiService} from "../../services/category-api.service";
import {CategoryModel} from "../../models/category.model";
import {environment} from "../../../../environments/environment.development";

@Component({
  selector: 'app-form-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './form-modal.component.html'
})
export class FormModalComponent {

  constructor(public activeModal: NgbActiveModal, private categoryApiService: CategoryApiService){}


  addCategoryForm = new FormGroup({
    name: new FormControl('',{
      validators:[Validators.required, Validators.minLength(environment.categoryFormNameMinLength),
        Validators.maxLength(environment.categoryFormNameMaxLength)],
      asyncValidators: [categoryExistsValidator(this.categoryApiService)],
      updateOn: 'blur'
    }),
    description: new FormControl('',[Validators.maxLength(environment.categoryFormDescriptionMaxLength)])
  });


  close(){
    this.activeModal.dismiss();
  }
  onSubmit() {
    this.categoryApiService.addCategory(this.addCategoryForm.value as CategoryModel)
      .subscribe(() => {
        this.activeModal.close();
      });
  }
}
