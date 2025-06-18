import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AUTH_PROVIDERS } from './app/features/auth/auth.providers';

bootstrapApplication(App, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    ...AUTH_PROVIDERS
  ]
}).catch(err => console.error(err));