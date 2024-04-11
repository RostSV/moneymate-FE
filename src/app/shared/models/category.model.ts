import {UserModel} from "./user.model";

export interface CategoryModel {
  id: number;
  name: string;
  description: string;
  assignedUser: UserModel;
}
