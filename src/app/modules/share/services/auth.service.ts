import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public createUser(fullName: any, email: any, password: any): Observable<any> {
    let id = 1;

    if (email == 'doctor@gmail.com') {
      id = 2;
    }

    return this.http.post(`http://localhost:8000/api/v1/users/visitor/signup`, {
      id: id,
      fullName: fullName,
      email: email,
      password: password,
    });
  }
}
