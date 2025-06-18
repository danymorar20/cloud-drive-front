import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { AuthRepository } from '../../domain/repositories/auth.repository';
import { User } from '../../domain/models/user.model';

@Injectable({ providedIn: 'root' })
export class AuthHttpService implements AuthRepository {
  private apiUrl = environment.apiUrl + '/auth/login';

  login(email: string, password: string): Observable<{ accessToken: string, user: User }> {
    const basicAuth = btoa(`${environment.basicAuthUser}:${environment.basicAuthPass}`);
    const headers = new HttpHeaders({
      Authorization: `Basic ${basicAuth}`
    });
    return this.http.post<{ accessToken: string, user: User }>(this.apiUrl, { email, password }, { headers });
  }

  constructor(private http: HttpClient) {}
}
