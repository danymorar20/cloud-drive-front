import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './features/auth/presentation/login/login';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Login
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'cloud-drive-front';
}
