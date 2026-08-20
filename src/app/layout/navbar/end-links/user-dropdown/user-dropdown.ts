import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'li[app-user-dropdown]',
  imports: [],
  templateUrl: './user-dropdown.html'
})
export class UserDropdown {


  private readonly auth = inject(AuthService);
  private readonly router = inject(Router);

  logout() {
    this.auth.logout().subscribe({
      next: response => {
        console.log(response)
        this.router.navigate(['/']);
      },
      error: console.error
    });

  }
}
