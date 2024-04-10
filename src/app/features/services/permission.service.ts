import {Injectable} from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor(private oauthService: OAuthService) { }

  hasPermission(): boolean {
    return this.oauthService.hasValidAccessToken();
  }
}
