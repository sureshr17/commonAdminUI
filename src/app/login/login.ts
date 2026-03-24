import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  showErrorModal = false;

  private readonly validEmail = 'admin@example.com';
  private readonly validPassword = 'admin123';

  constructor(private readonly router: Router) {}

  onLogin(): void {
    const isValidUser =
      this.email.trim().toLowerCase() === this.validEmail &&
      this.password === this.validPassword;

    if (isValidUser) {
      this.showErrorModal = false;
      void this.router.navigate(['/dashboard']);
      return;
    }

    this.showErrorModal = true;
  }

  closeModal(): void {
    this.showErrorModal = false;
  }
}
