// login.component.ts
import { HttpResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/share/services/auth.service';
import { CoockieManagerService } from 'src/app/modules/share/services/coockie-manager.service';
import { Router } from '@angular/router';
import { ToastManagerService } from 'src/app/modules/share/services/toast-manager.service';

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
    private cookieManagerService: CoockieManagerService,
    private router: Router,
    private toastMessage: ToastManagerService
  ) {}

  login() {
    this.authService.login(this.user.username, this.user.password).subscribe(
      (response: any) => {
        if (response.statusCode == 200) {
          const authToken = response.data.token;

          if (authToken !== null && authToken !== undefined) {
            console.log('Login successful. Token:', authToken);
            //this.toastMessage.showSuccess('Login successful', 'Success');

            this.cookieManagerService.setToken(authToken);

            if (response.data.role === 'ROLE_ADMIN') {
              alert('Login Success Admin');
              console.log('Admin Success');
              // this.router.navigate(['/admindashboard']);
            } else {
              alert('Login Success User');
              //this.router.navigate(['/homepage']);
            }
            //
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
