// signup.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user = {
    firstName: '',
    email: '',
    password: '',
  };

  onSubmit() {
    console.log('User submitted:', this.user);
  }
}
