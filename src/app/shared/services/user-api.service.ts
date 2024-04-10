import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UserModel} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  apiUrl = environment.beUrl + "/api/v1/users"
  constructor(private http: HttpClient) { }

  addUser(user: UserModel) {
    return this.http.post(this.apiUrl, user);
  }
}
