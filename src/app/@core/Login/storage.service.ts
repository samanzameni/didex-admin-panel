import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor() { }

    setAccessToken(token: string): void {
        localStorage.setItem('didex_admin_access_token', token);
      }
    getAccessToken(): string {
         return localStorage.getItem('didex_admin_access_token');
        }
    removeAccessToken(): void {
          localStorage.removeItem('didex_admin_access_token');
        }
    setCaptchaToken(token: string): void {
      localStorage.setItem('didex_admin_captcha_token', token);
    }
    getCaptchaToken(): string {
      return localStorage.getItem('didex_admin_captcha_token');
    }
    removeCaptchaToken(): void {
      localStorage.removeItem('didex_admin_captcha_token');
    }
}
