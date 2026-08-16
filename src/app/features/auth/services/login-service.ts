import { inject, Inject, Injectable } from '@angular/core';
import { HttpClientPort } from '@core/http/ports/http-client.port';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  http: HttpClientPort = inject(HttpClientPort);

  constructor() {}

  login() {

  }
}
