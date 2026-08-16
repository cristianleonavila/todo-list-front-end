// angular-http.adapter.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientPort } from '../ports/http-client.port';


@Injectable()
export class AngularHttpAdapter implements HttpClientPort {
  constructor(private http: HttpClient) {}

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(url);
  }

  post<T>(url: string, body: any): Observable<T> {
    return this.http.post<T>(url, body);
  }
}

