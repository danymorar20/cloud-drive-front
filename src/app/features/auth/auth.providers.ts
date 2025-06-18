import { Provider } from '@angular/core';
import { AUTH_REPOSITORY } from './domain/repositories/auth-repository.token';
import { AuthHttpService } from './infrastructure/services/auth-http.service';

export const AUTH_PROVIDERS: Provider[] = [
  { provide: AUTH_REPOSITORY, useClass: AuthHttpService }
];
