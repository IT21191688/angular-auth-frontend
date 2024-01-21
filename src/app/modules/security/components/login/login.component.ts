// login.component.ts
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/share/services/auth.service';
import { CoockieManagerService } from 'src/app/modules/share/services/coockie-manager.service'; // Update the path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  user = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private cookieManagerService: CoockieManagerService
  ) {}

  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(
      (response: any) => {
        if (response && response.token) {
          const authToken = response.token;

          if (authToken !== null && authToken !== undefined) {
            console.log('Login successful. Token:', authToken);

            this.cookieManagerService.setToken(authToken);
          } else {
            console.error('Authorization header is null or undefined.');
          }
        } else {
          console.error('Response or headers are null or undefined.');
        }
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }
}
