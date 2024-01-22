import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public createUser(fullName: any, email: any, password: any): Observable<any> {
    return this.http.post(`http://localhost:8000/api/v1/users/visitor/signup`, {
      fullName: fullName,
      email: email,
      password: password,
      roleId: 2,
    });
  }

  public login(email: any, password: any): Observable<any> {
    return this.http.post(`http://localhost:8000/login`, {
      username: email,
      password: password,
    });
  }
}
