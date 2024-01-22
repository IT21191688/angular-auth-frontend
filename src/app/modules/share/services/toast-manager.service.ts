// toast-manager.service.ts
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastManagerService {
  constructor(private toastr: ToastrService) {}

  private showToast(
    message: string,
    title: string,
    options?: Partial<any>
  ): void {
    this.toastr.show(message, title, options);
  }

  showSuccess(message: string, title?: any): void {
    this.showToast(message, title, {
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      positionClass: 'toast-top-right',
    });
  }

  showError(message: string, title?: any): void {
    this.showToast(message, title, {
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      positionClass: 'toast-top-right',
      toastClass: 'ngx-toastr-error',
    });
  }

  showWarning(message: string, title?: any): void {
    this.showToast(message, title, {
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      positionClass: 'toast-top-right',
      toastClass: 'ngx-toastr-warning',
    });
  }

  showInfo(message: string, title?: any): void {
    this.showToast(message, title, {
      closeButton: true,
      progressBar: true,
      timeOut: 2000,
      positionClass: 'toast-top-right',
      toastClass: 'ngx-toastr-info',
    });
  }
}
