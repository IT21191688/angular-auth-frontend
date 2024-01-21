// signup.component.ts

import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/share/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass'],
})
export class SignupComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    // Call the createUser method from AuthService
    this.authService
      .createUser(this.user.fullName, this.user.email, this.user.password)
      .subscribe(
        (response) => {
          console.log('User created successfully:', response);
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Error creating user:', error);
          this.router.navigate(['/signup']);
        }
      );
  }
}
