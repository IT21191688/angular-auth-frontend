import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class CoockieManagerService {
  constructor(private cookieService: CookieService) {}

  public setToken(token: string): void {
    this.cookieService.set('token', token);
  }
}
