import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginUseCase } from '../../application/use-cases/login.use-case';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
   email = '';
  password = '';
  error?: string;

  constructor(private loginUseCase: LoginUseCase) {}

  onSubmit() {
    this.loginUseCase.execute({ email: this.email, password: this.password }).subscribe({
      next: res => {
        // manejar login exitoso
        this.error = undefined;
      },
      error: () => {
        this.error = 'Login failed';
      }
    });
  }
}
