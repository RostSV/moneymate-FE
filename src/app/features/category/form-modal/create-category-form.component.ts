import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {environment} from "../../../../environments/environment.development";
import {categoryExistsValidator} from "../../../shared/validator/custom.validator";
import {CategoryApiService} from "../../../shared/services/category-api.service";
import {CategoryModel} from "../../../shared/models/category.model";

@Component({
  selector: 'app-form-modal',
  templateUrl: './create-category-form.component.html'
})
export class CreateCategoryFormComponent {

  constructor(public activeModal: NgbActiveModal, private categoryApiService: CategoryApiService){}


  addCategoryForm = new FormGroup({
    name: new FormControl('',{
      validators:[Validators.required, Validators.minLength(environment.nameMinLength),
        Validators.maxLength(environment.nameMaxLength)],
      asyncValidators: [categoryExistsValidator(this.categoryApiService)],
      updateOn: 'blur'
    }),
    description: new FormControl('',[Validators.maxLength(environment.descrMaxLength)])
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
