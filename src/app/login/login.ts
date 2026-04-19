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
  username = '';
  password = '';
  showErrorModal = false;

  private readonly validUsername = 'admin';
  private readonly validPassword = 'abc123';

  constructor(private readonly router: Router) {}

  onLogin(): void {
    const isValidUser =
      this.username.trim() === this.validUsername &&
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
