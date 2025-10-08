import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-application',
  imports: [CommonModule, FormsModule],
  templateUrl: './login-application.html',
  styleUrl: './login-application.css'
})
export class LoginApplication {
  
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  private validateInputs(): string[] {
    let errors: string[] = [];

    if (!this.username) {
      errors.push("Username is required.");
    } else if (this.username.length < 4) {
      errors.push("Username must be at least 4 characters long.");
    } else if (!/^[a-zA-Z0-9_.-]+$/.test(this.username)) {
      errors.push("Username can only contain letters, numbers, ., -, _.");
    }

    if (!this.password) {
      errors.push("Password is required.");
    } else if (this.password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    } else if (!/(?=.*[a-z])/.test(this.password)) {
      errors.push("Password must contain at least one lowercase letter.");
    } else if (!/(?=.*[A-Z])/.test(this.password)) {
      errors.push("Password must contain at least one uppercase letter.");
    } else if (!/(?=.*\d)/.test(this.password)) {
      errors.push("Password must contain at least one number.");
    } else if (!/(?=.*[@$!%*?&])/.test(this.password)) {
      errors.push("Password must contain at least one special character (@$!%*?&).");
    }

    return errors;
  }

  login() {
    const errors = this.validateInputs();

    if (errors.length > 0) {
      alert(errors.join("\n"));   // 🚨 show validation pop-up
      return;
    }

    // Hardcoded credentials check
    if (this.username === 'admin' && this.password === 'Admin@123') {
      alert("Welcome, Login Success");   // ✅ go to Welcome page
    } else {
      alert("❌ Invalid username or password!");   // 🚨 error pop-up
    }
  }

}
