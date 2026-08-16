import { Observable } from 'rxjs';

export abstract class HttpClientPort {
  abstract get<T>(url: string): Observable<T>;
  abstract post<T>(url: string, body: any): Observable<T>;
}
