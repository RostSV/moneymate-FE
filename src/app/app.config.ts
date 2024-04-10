import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {authInterceptor} from "./core/interceptors/auth.interceptor";
import {OAuthModule} from "angular-oauth2-oidc";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([
      authInterceptor
    ])),
    provideRouter(routes),
    importProvidersFrom(
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['/'],
          sendAccessToken: true
        }
      })
    )
  ]
};
