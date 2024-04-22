import {
  ApplicationConfig,
  importProvidersFrom,
  LOCALE_ID,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { OAuthModule } from 'angular-oauth2-oidc';
import { registerLocaleData } from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {provideAnimations} from "@angular/platform-browser/animations";

registerLocaleData(localeSk, 'sk');
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
    { provide: LOCALE_ID, useValue: 'sk' },
    provideRouter(routes),
    provideAnimations(),
    importProvidersFrom(
      OAuthModule.forRoot({
        resourceServer: {
          allowedUrls: ['/'],
          sendAccessToken: true,
        },
      }),
    ),
  ],
};
