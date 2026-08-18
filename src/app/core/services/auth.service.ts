import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

import {
  AuthenticatedUser,
  LoginRequest,
  LoginResponse
} from '@core/models/auth.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = environment.backend;

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      `${this.apiUrl}/login`,
      credentials,
      {
        withCredentials: true
      }
    );
  }

  logout() {
    return this.http.post(
      `${this.apiUrl}/logout`,
      "",
      {
        withCredentials: true
      }
    );
  }

  getCurrentUser(): Observable<AuthenticatedUser> {
    return this.http.get<AuthenticatedUser>(
      `${this.apiUrl}/auth/me`,
      {
        withCredentials: true
      }
    );
  }
}
