import {UserRoleEnum} from "./user-role.enum";

export interface UserModel {
  id: number;
  firstName: string;
  email: string;
  role: UserRoleEnum;
}
