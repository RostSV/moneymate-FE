import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authCodeFlowConfig: AuthConfig = {
  issuer: environment.keyCloakUrl + '/realms/moneymateAppRealm',
  redirectUri: environment.appUrl + '/home',
  clientId: 'myClient',
  scope: 'openid',
  showDebugInformation: true,
  requireHttps: false,
  logoutUrl: environment.appUrl + '/welcome',
};
