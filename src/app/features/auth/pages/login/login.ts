import { Component, inject } from '@angular/core';
import { environment } from '@env/environment';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login {

  appTitle = environment.appName;
  author = environment.autor;
  isLoading = false;
  private formBuilder = inject(FormBuilder);
  loginForm: FormGroup = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  isFieldInvalid(fieldName: string): boolean {
    const field = this.loginForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  constructor() { }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.isLoading = true;
    const { email, password } = this.loginForm.value;

    // Simulación de petición de autenticación
    setTimeout(() => {
      this.isLoading = false;
      // Aquí invocarás tu AuthService y redirigirás al Dashboard
    }, 1500);
  }

}
