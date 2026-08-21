import { AfterViewInit, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { InvalidClass } from '@shared/directives/invalid-class';
import { FormError } from '@shared/components/form-error/form-error';
import { ColorModeToggle } from "@layout/navbar/end-links/color-mode-toggle/color-mode-toggle";
import { Footer } from "@layout/footer/footer";
import { initialize } from 'admin-lte';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, InvalidClass, FormError, ColorModeToggle, Footer],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export default class Login implements AfterViewInit {
  ngAfterViewInit(): void {
    initialize();
  }

  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  public appTitle = environment.appName;
  public isLoading = signal(false);
  private readonly formBuilder = inject(FormBuilder);
  private readonly toastr = inject(ToastrService);

  errorsModel = {
    username: {
      required: 'Debe especificar el usuario'
    },
    password: {
      required: "Debe digitar la contraseña"
    }
  };


  loginForm = this.formBuilder.group({
    username: ['ldiaz', [Validators.required]],
    password: ['Lorena123', [Validators.required]],
  });

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
      error: ({error}) => {
        const msg = error.error;
        this.toastr.error(msg, 'Error');
        this.isLoading.set(false);
      }
    });
  }
}
