import { Component, inject, signal } from '@angular/core';
import { NgClass } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { environment } from '@env/environment';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login {

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  appTitle = environment.appName;
  isLoading = signal(false);

  private readonly formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    username: ['ldiaz', [Validators.required]],
    password: ['Lorena123', [Validators.required]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);

    return !!(
      field &&
      field.invalid &&
      (field.dirty || field.touched)
    );
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.isLoading.set(true);

    const credentials = this.loginForm.getRawValue();

    this.authService.login(credentials).subscribe({
      next: response => {
        this.isLoading.set(false);
        this.router.navigate(['/main']);
      },
      error: error => {
        console.error('Error al iniciar sesión:', error);
        this.isLoading.set(false);
      }
    });
  }
}
