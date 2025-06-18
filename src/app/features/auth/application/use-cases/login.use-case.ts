import { Inject, Injectable } from '@angular/core';
import { AUTH_REPOSITORY } from '../../domain/repositories/auth-repository.token';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { LoginDto } from '../dtos/login.dto';

@Injectable({ providedIn: 'root' })
export class LoginUseCase {
  constructor(
    @Inject(AUTH_REPOSITORY) private authRepo: AuthRepository
  ) {}

  execute(dto: LoginDto) {
    return this.authRepo.login(dto.email, dto.password);
  }
}
