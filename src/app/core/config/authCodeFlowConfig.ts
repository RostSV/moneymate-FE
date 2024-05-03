import { AuthConfig } from 'angular-oauth2-oidc';
import {environment} from "../../../environments/environment";

export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.keyCloakUrl + '/realms/FSA',
  redirectUri: environment.appUrl + '/',
  clientId: 'myClient',
  scope: 'openid',
  showDebugInformation: true,
  requireHttps: false,
  postLogoutRedirectUri: environment.appUrl + '/',
};
