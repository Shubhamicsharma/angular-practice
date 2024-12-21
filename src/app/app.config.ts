import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/interceptor.interceptor';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSlickgridModule } from 'angular-slickgrid';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([AuthInterceptor]) // Register the AuthInterceptor function
    ),
     BrowserAnimationsModule,
     importProvidersFrom(AngularSlickgridModule.forRoot()),
  ]
};
