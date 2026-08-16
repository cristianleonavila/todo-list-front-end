import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClientPort } from './core/http/ports/http-client.port';
import { AngularHttpAdapter } from './core/http/adapters/angular-http-adapter';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: HttpClientPort,
      useClass: AngularHttpAdapter
    }
  ]
};
