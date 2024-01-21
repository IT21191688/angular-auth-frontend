// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/share/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.user.email, this.user.password).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Handle the response data, e.g., store user information in the session
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle errors here, e.g., display an error message to the user
      }
    );
  }
}
